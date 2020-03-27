const uuid = require("uuid");

class Message {
  constructor(text, owner) {
    this.id = uuid.v4();
    this.text = text;
    this.user = owner;
    this.created_at = new Date();
  }

  static create(text, user) {
    const message = new this(text, user);

    return message.toJSON();
  }

  static createAsBot(text) {
    const user = {
      id: 11111,
      bot: true,
      username: "Ciciara Bot",
    };

    const message = new this(text, user);

    return message.toJSON();
  }

  toJSON() {
    return {
      id: this.id,
      user: this.user,
      text: this.text,
      created_at: this.created_at,
    };
  }
};

module.exports = Message;
