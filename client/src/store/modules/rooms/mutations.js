import * as mutations from "./mutation-types";

export default {
  [mutations.APPEND_MESSAGE]: (state, message) => {
    state.room.messages.push(message);
  },

  [mutations.SET_ROOMS]: (state, rooms) => {
    state.rooms = rooms;
  },

  [mutations.SET_ROOM]: (state, room) => {
    state.room = room;
  }
};
