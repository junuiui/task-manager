import "reflect-metadata"

import express from "express";
import { addRoutes } from "./src/config/routes.config";
import mongoose from "mongoose";
import * as dotenv from 'dotenv'


const app: express.Express = express();

dotenv.config();

const port = process.env.PORT;

app.use(express.json());

addRoutes(app);

async function bootstrap() {

    if (!process.env.DB_URL){
        throw new Error("Cannot read env")
        process.exit(1);
    }

    try {
        await mongoose.connect(
            process.env.DB_URL, {
            dbName: process.env.DB_NAME
        }
        ) // connect to mongo db

        console.log(`Connected to MongoDB`)
        app.listen(port, () => {
            console.log(`Application is Running! at http://localhost:${port}`)
        })

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

bootstrap();
