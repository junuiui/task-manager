import "reflect-metadata"

import express from "express";
import { container } from "./src/config/container";
import { TaskController } from "./src/tasks/tasks.controller";

const app: express.Express = express();
const port = 3001;

app.get("/", (req: express.Request, res: express.Response) => {
    res.send("Express Application!");
})

const task = container.get<TaskController>(TaskController);

app.post("/tasks", (req: express.Request, res: express.Response) => {
    const newTask = task.createTask();
    res.send("Express application")
})

app.listen(port, () => {
    console.log(`Application is Running! at http://localhost:${port}`)
})

