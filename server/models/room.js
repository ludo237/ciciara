const uuid = require("uuid");

class Room {
  constructor(name, description) {
    this.id = uuid.v4();
    this.name = name;
    this.description = description || "";
    this.users = [];
    this.messages = [];
    this.created_at = new Date();
    this.updated_at = new Date();
  }

  static create(name) {
    return new this(name);
  }

  static generateStubs() {
    return [
      new this("lounge", "first channel for everyone"),
      new this("memes", "meme channel heheh"),
      new this("nsfw", "+18 content only 🔞")
    ];
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
      description: this.description,
      users: this.users,
      messages: this.messages,
      created_at: this.created_at,
      updated_at: this.updated_at,
    };
  }
}

module.exports = Room;
