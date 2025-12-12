import "reflect-metadata"

import express from "express";
import { container } from "./src/config/container";

const app: express.Express = express();
const port = 3001;

app.get("/", (req: express.Request, res: express.Response) => {
    res.send("Express Application!");
})


app.post("/create-page", (req: express.Request, res: express.Response) => {

})

app.listen(port, () => {
    console.log(`Application is Running! at http://localhost:${port}`)
})

