import "reflect-metadata"

import express from "express";
import { Page } from "./src/page";
import { Post } from "./src/post";
import { User } from "./src/user";
import { container } from "./src/config/container";

const app: express.Express = express();
const port = 3001;

app.get("/", (req: express.Request, res: express.Response) => {
    res.send("Express Application!");
})

const pageClass = container.get<Page>(Page);

app.post("/create-page", (req: express.Request, res: express.Response) => {
    let page = pageClass.createPage("http://mypage.com");
    res.json(page);
})

app.listen(port, () => {
    console.log(`Application is Running! at http://localhost:${port}`)
})

