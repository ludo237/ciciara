const express = require("express");
const http = require("http");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const messageFactory = require("./models/message");
const userFactory = require("./models/user");
const roomFactory = require("./models/room");

// TODO this is basically our DB right now
// later it will be ported to mongoDB
let rooms = [];
let users = [];
let typing = [];

rooms = roomFactory.generateStubs();

io.on("connection", async socket => {
  io.emit("rooms_info", { rooms });

  socket.on("room:join", payload => {
    let room = rooms.find(r => r.name === payload.room);
    if (room == undefined) {
      room = new roomFactory(payload.room);
      rooms.push(room);
    }

    let user = users.find(u => u.socket_id === socket.id);
    if (user == undefined) {
      user = new userFactory(socket.id, payload.user);
      users.push(user);
    }

    room.addUser(user);
    user.addRoom(room);
    socket.join(room.name);

    // Broadcast user login to the specific room
    const message = messageFactory.createAsBot(`Hello ${user.username} welcome to ${room.name}`)
    room.addMessage(message);

    socket.broadcast
      .to(room.name)
      .emit("message", message.toJSON());

    // Update room info
    io
      .to(room.name)
      .emit("room_info", { room, user });
  });

  socket.on("message:typing", payload => {
    user = users.find(u => u.socket_id == socket.id);
    room = rooms.find(r => r.id == user.room_id);

    const userInArray = typing.includes(user);

    if (!userInArray && payload.status) {
      typing.push(user);
    }

    if (userInArray && !payload.status) {
      const index = typing.findIndex(u => u.id == user.id);

      if (index !== -1) {
        typing.splice(index, 1);
      }
    }

    let message = "";

    if (typing.length == 1) {
      message = `${user.username} is typing...`;
    }

    if (typing.length == 2) {
      message = "2 people are typing...";
    }

    if (typing.length === 3) {
      message = "3 people are typing...";
    }

    if (typing.length > 3) {
      message = "several people are typing...";
    }

    console.log(typing);

    socket
      .to(room.name)
      .emit("typing", message);
  });

  // Listen for a message
  socket.on("message:sent", payload => {
    user = users.find(u => u.socket_id == socket.id);
    room = rooms.find(r => r.id == user.room_id);
    message = messageFactory.create(payload.message, user)

    room.addMessage(message);

    io
      .to(room.name)
      .emit("message", message.toJSON());
  });

  // Broadcast user logout
  socket.on("disconnect", () => {
    // Stupid check because we have an inmemory db now
    if (users.length > 0 && rooms.length > 0) {
      user = users.find(u => u.socket_id == socket.id);
      room = rooms.find(r => r.id == user.room_id);

      const message = messageFactory.createAsBot(`Farwell, ${user.username} has left the chat`);

      user.removeRoom();
      room.removeUser(user);
      room.addMessage(message);

      io
        .to(room.name)
        .emit("message", message);

      // Update room info
      io
        .to(room.name)
        .emit("room_info", { room, user });
    }
  });
});

const PORT = process.env.PORT || 2370;

server.listen(PORT, () => {
  console.log("Server is up and running");
});
