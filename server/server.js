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
    try {
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
    } catch (e) {
      console.log(e);
    }
  });
});

const PORT = process.env.PORT || 2370;

server.listen(PORT, () => {
  console.log("Server is up and running");
});
