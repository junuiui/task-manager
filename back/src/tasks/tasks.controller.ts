import { Request, Response } from "express";
import { injectable, inject } from "inversify";
import { UserController } from "../user/user.controller";
import { IPartialTaskWithId, ITask } from "./task.interface";
import { Document } from "mongoose";
import { TaskService } from './task.service';
import { UpdateTaskProvider } from "./providers/updateTask.provider";
import { matchedData } from 'express-validator';
import { ITaskPagination } from "./interfaces/taskPagination.interface";
import { GetTasksProvider } from './providers/getTasks.provider';

@injectable()
export class TasksController {
    constructor(
        @inject(UserController) private userController: UserController,
        @inject(TaskService) private taskService: TaskService,
        @inject(UpdateTaskProvider) private updateTaskProvider: UpdateTaskProvider,
        @inject(GetTasksProvider) private GetTasksProvider: GetTasksProvider,
    ) { }


    public async handleGetTasks(req: Request, res: Response) {
        const validationData: Partial<ITaskPagination> = matchedData(req)
        try {
            const tasks: { data: ITask[]; meta: {} } = await this.GetTasksProvider.findAllTask(validationData);
            return tasks;

        } catch (error: any) {
            throw new Error("Error: handleGetTasks")
        }
    }

    public async handlePostTasks(req: Request<{}, {}, ITask>, res: Response) {
        const validationData: ITask = matchedData(req)

        try {
            const task: Document<unknown, any, ITask> =
                await this.taskService.createTask(validationData);

            return await task.save();

        } catch (error: any) {
            throw new Error(error);
        }

    }

    public async handlePatchTasks(req: Request<{}, {}, IPartialTaskWithId>, res: Response): Promise<Document> {
        const validationData: IPartialTaskWithId = matchedData(req)
        try {
            return await this.updateTaskProvider.updateTask(validationData)
        }
        catch (error: any) {
            throw new Error(error)
        }

    }
}