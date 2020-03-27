const uuid = require("uuid");

class User {

  constructor(socketId, username) {
    this.id = uuid.v4();
    this.socket_id = socketId
    this.username = username;
    this.room_id = null;
    this.created_at = new Date();
    this.updated_at = new Date();
  }

  static create(username) {
    const user = new this(username);

    return user.toJSON();
  }

  addRoom(room) {
    this.room_id = room.id;
    this.updated_at = new Date();
  }

  removeRoom() {
    this.room_id = null;
    this.updated_at = new Date();
  }

  toJSON() {
    return {
      id: this.id,
      username: this.username,
      room: this.room,
      created_at: this.created_at,
      updated_at: this.updated_at
    };
  }
};

module.exports = User;
