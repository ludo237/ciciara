const uuid = require("uuid");

class Room {
  constructor(name) {
    this.id = uuid.v4();
    this.name = name;
    this.users = [];
    this.messages = [];
    this.created_at = new Date();
    this.updated_at = new Date();
  }

  static create(name) {
    const room = new this(name);

    return room.toJSON();
  }

  addUser(user) {
    this.users.push(user);
    this.updated_at = new Date();
  }

  removeUser(user) {
    const index = this.users.findIndex(u => u.id == user.id);

    if (index !== -1) {
      this.users.splice(index, 1);
      this.updated_at = new Date();
    }
  }

  addMessage(message) {
    this.messages.push(message);
    this.updated_at = new Date();
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      users: this.users,
      messages: this.messages,
      created_at: this.created_at,
      updated_at: this.updated_at,
    };
  }
}

module.exports = Room;
