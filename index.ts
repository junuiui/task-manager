import express from "express";

const app: express.Express = express();
const port = 3001;

app.get("/", (req: express.Request, res: express.Response) => {
    res.send("Express Application");
})

app.listen(port, () => {
    console.log(`Application is Running! at http://localhost:${port}`)
})

