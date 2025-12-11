import { Container } from "inversify"
import { User } from "../user";
import { Page } from "../page";

// 1. create container
export const container: Container = new Container(); 

// 2. bind to container
container.bind(User).toSelf();
container.bind(Page).toSelf();
