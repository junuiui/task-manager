import { injectable, inject } from "inversify";
import { TaskService } from "../task.service";
import { ITaskPagination } from "../interfaces/taskPagination.interface";
import { ITask } from "../task.interface";

@injectable()
export class GetTasksProvider {
    constructor(@inject(TaskService) private taskService: TaskService) { }

    public async findAllTask(pagination: Partial<ITaskPagination>): Promise<{ data: ITask[]; meta: {} }> {
        const tasks: ITask[] = await this.taskService.findAllActive({
            limit: pagination.limit ?? 10,
            page: pagination.page ?? 1,
            order: pagination.order ?? 'asc',
        })

        const totalTask = await this.taskService.countDocuments();
        const completedTask = await this.taskService.countDocuments({
            status: "completed"
        });
        const todoTask = await this.taskService.countDocuments({
            status: "todo"
        });
        const inProgressTask = await this.taskService.countDocuments({
            status: "inProgress"
        });

        return {
            data: tasks,
            meta: {
                totalTask, completedTask, todoTask, inProgressTask
            }
        }
    }
}