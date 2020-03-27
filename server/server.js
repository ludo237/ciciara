const express = require("express");
const http = require("http");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const messageFactory = require('./models/message');

io.on("connection", async socket => {

  // Broadcast user login
  socket.broadcast.emit("message", messageFactory.createAsBot("New user has joined"));

  socket.on("disconnect", () => {
    // Broadcast user logout
    io.emit("message", messageFactory.createAsBot("A user has left the chat"));
  });

  // List for a message
  socket.on("message:sent", ({ user, message }) => {
    io.emit("message", messageFactory.create(message, user));
  })
});

const PORT = process.env.PORT || 2370;

server.listen(PORT, () => {
  console.log("Server is up and running");
})
