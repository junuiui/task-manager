export interface ITask {
    title: string;
    description: string;
    status: "todo" | "inProgress" | "completed";
    priority: "low" | "normal" | "high";
    dueDate: Date;
}

// for update
export interface IPartialTaskWithId extends Partial<ITask> {
    _id: string;
}

