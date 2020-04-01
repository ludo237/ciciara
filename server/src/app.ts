import Express, { Application } from "express";
import Cors from "cors";
import ErrorHandler from "errorhandler";
import { RoomController } from "./controllers";

// Initialize Dotenv
require("dotenv").config({ path: ".env.local" });

const app: Application = Express();

app.use(ErrorHandler());
app.use(Express.json());
app.use(Cors());

// Rooms API
app.use(`${process.env.API_PREFIX}/rooms`, RoomController);

export default app;
