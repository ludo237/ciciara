import Express from "express";
import Socket from "socket.io";

// Local Imports
import App from "./app";
import connect from "./database";

// Global dev devMode
const devMode = process.env.NODE_ENV === "development";

// Initialize Dotenv
require("dotenv").config({ path: ".env.local" });

// Initialize ORM
const db = process.env.DB_URL || "";
connect({ db });

// Start the server
const server = App.listen(process.env.API_PORT, () => {
  console.log(`Server is up and running on port: ${process.env.API_PORT}`);
});

let io = Socket(server);

io.on("connection", async (socket: any) => {
  console.log("Someone connected using socket");
});
