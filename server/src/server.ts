import Express from "express";

// Local Imports
import App from "./app";
import connect from "./database";

// Global dev devMode
const devMode = process.env.NODE_ENV === "development";

// Initialize Dotenv
require("dotenv").config({ path: ".env.local" });

// Initialize Socket
const io = require("socket.io")(require("http").Server(App));

// Initialize ORM
const db = process.env.DB_URL || "";
connect({ db });

io.on("connection", async (socket: any) => {
  console.log("Someone connected using socket");
});

// Start the server
App.listen(process.env.API_PORT, () => {
  console.log(`Server is up and running on port: ${process.env.API_PORT}`);
});
