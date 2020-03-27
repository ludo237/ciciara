const uuid = require("uuid");

class Message {
  static create(text, user) {
    return {
      id: uuid.v4(),
      user,
      text,
      created_at: new Date(),
    };
  }

  static createAsBot(text) {
    return {
      id: uuid.v4(),
      user: {
        id: 1,
        bot: true,
        username: "Ciciara Bot",
      },
      text,
      created_at: new Date(),
    }
  }
};

module.exports = Message;
