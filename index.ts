import "reflect-metadata"

import express from "express";
import { addRoutes } from "./src/config/routes.config";

const app: express.Express = express();
const port = 3001;

addRoutes(app);

app.listen(port, () => {
    console.log(`Application is Running! at http://localhost:${port}`)
})

