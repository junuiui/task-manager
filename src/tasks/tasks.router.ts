import express, { Request, Response, Router } from "express";
import { TasksController } from "./tasks.controller";
import { injectable, inject } from "inversify";
import { IPartialTaskWithId, ITask } from "./task.interface";
import { createTaskValidator } from "./validators/createTask.validator";
import { validationResult } from "express-validator";

@injectable()
export class TasksRouter {
    public router: Router;

    constructor(
        @inject(TasksController) private tasksController: TasksController
    ) {
        this.router = express.Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(
            "/",
            async (req: Request, res: Response) => {
                const allTask = await this.tasksController.handleGetTasks(req, res);
                res.json(allTask);
            });

        // Post Route
        this.router.post(
            "/create",
            createTaskValidator,
            async (req: Request<{}, {}, ITask>, res: Response) => {
                const result = validationResult(req);

                // result is empty if NO error
                if (result.isEmpty()) {
                    const newTask = await this.tasksController.handlePostTasks(req, res);
                    res.json(newTask);
                }
                else {
                    res.json(result.array());
                }
            }
        );

        // Patch Route
        this.router.patch(
            "/update",
            async (req: Request<{}, {}, IPartialTaskWithId>, res: Response) => {
                const newTask = await this.tasksController.handlePatchTasks(req, res);
                res.json(newTask);
            });
    }
}