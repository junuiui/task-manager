import express from "express";

const app = express();
const port = 3001;

app.get("/", (req, res) => {
    res.send("Express Application");
})

app.listen(port, () => {
    console.log(`Application is Running! at http://localhost:${port}`)
})

