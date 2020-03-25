const express = require("express");
const http = require("http");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on("connection", socket => {
  console.log("New websocket connection");
});

const PORT = process.env.PORT || 2370;

server.listen(PORT, () => {
  console.log("Server is up and running");
})
