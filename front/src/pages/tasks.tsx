import type { FC, ReactElement } from "react";

import { Task } from "@/components/task/task";
import { TasksCounter } from "@/components/tasksCounter/tasksCounter";
import { TaskSidebar } from "@/components/taskSidebar/taskSidebar";

export const Tasks: FC = (): ReactElement => {
    return (
        <section className="flex flex-row w-full p-4 gap-8 ">
            <section className="flex basis-2/3 justify-center">
                <div className="flex flex-col w-4/5 p-4">
                    <h1 className="text-white font-bold text-2xl mb-8">
                        Tasks as on: Saturday, 1 Mar 2025
                    </h1>
                    <div className="flex justify-around mb-12">
                        <TasksCounter status="todo" count={3} />
                        <TasksCounter status="inProgress" count={3} />
                        <TasksCounter status="completed" count={3} />
                    </div>

                    <Task
                        title="Task Title"
                        description="Task Description"
                        dueDate={new Date("2025-01-01T12:00:00.000Z")}
                        priority="normal"
                        status="todo"
                    />
                    <Task
                        title="Task Title"
                        description="Task Description"
                        dueDate={new Date("2025-01-01T12:00:00.000Z")}
                        priority="low"
                        status="todo"
                    />
                    <Task
                        title="Task Title"
                        description="Task Description"
                        dueDate={new Date("2025-01-01T12:00:00.000Z")}
                        priority="high"
                        status="completed"
                    />
                </div>
            </section>
            <section className="flex basis-1/3">
                <TaskSidebar />
            </section>
        </section>
    );
};