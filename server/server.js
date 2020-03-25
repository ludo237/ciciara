const express = require("express");
const http = require("http");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on("connection", socket => {
  // Welcome the client
  socket.emit("welcome", "Ciciara connection established");

  // Broadcast user login
  socket.broadcast.emit("connection", "New user has joined the chat");

  socket.on("disconnect", () => {
    // Broadcast user logout
    io.emit("disconnection", "A user has left the chat");
  });
});

const PORT = process.env.PORT || 2370;

server.listen(PORT, () => {
  console.log("Server is up and running");
})
