import { inject, injectable } from "inversify"

@injectable()
export class TaskController {
    constructor(){}

    public createTask() {
        return {
            title: "This is a title",
            description: "Task Description"
        }
    }
}