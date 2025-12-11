import express from "express";
import { Page } from "./src/page";
import { Post } from "./src/post";
import { User } from "./src/user";

const app: express.Express = express();
const port = 3001;

app.get("/", (req: express.Request, res: express.Response) => {
    res.send("Express Application!");
})

app.post("/create-post", (req: express.Request, res: express.Response) => {
    let post = new Post("New Post", "Post content", new User("John"));
    res.send("Post Created");
})

app.post("/create-page", (req: express.Request, res: express.Response) => {
    let post = new Page("http://page.com", new User("John"));
    res.send("Page Created");
})

app.listen(port, () => {
    console.log(`Application is Running! at http://localhost:${port}`)
})

