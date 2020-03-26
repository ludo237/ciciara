const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const uuid = require("uuid");

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

  // List for a message
  socket.on("message_sent", ({ user, message }) => {
    const messageObject = {
      id: uuid.v4(),
      user,
      text: message,
      created_at: new Date(),
    };

    io.emit("message_broadcast", messageObject);
  })
});

const PORT = process.env.PORT || 2370;

server.listen(PORT, () => {
  console.log("Server is up and running");
})
