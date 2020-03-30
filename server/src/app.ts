import Express, { Application } from "express";
import Cors from "cors";
import ErrorHandler from "errorhandler";
import { RoomController } from "./controllers";

// Initialize Dotenv
require("dotenv").config({ path: ".env" });

const app: Application = Express();

app.use(ErrorHandler());
app.use(Express.json());
app.use(Cors());

app.use(`${process.env.API_PREFIX}/rooms`, RoomController);

export default app;
