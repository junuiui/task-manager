import { Container } from "inversify"
import { TaskController } from '../tasks/tasks.controller';

// 1. create container
export const container: Container = new Container(); 

container.bind(TaskController).toSelf().inTransientScope();