import * as mutations from "./mutation-types";

export default {
  [mutations.SET_CICIARA_ONLINE]: state => {
    state.server.online = true;
  },

  [mutations.SET_CICIARA_OFFLINE]: state => {
    state.server.online = false;
  },

  [mutations.LOGIN]: (state, { username, roomId }) => {
    state.user.username = username;

    state.selectedRoom = state.rooms.find(room => room.id === roomId);
  },

  [mutations.APPEND_MESSAGE]: (state, message) => {
    state.selectedRoom.messages.push(message);
  },

  [mutations.SET_ROOMS]: (state, rooms) => {
    state.rooms = rooms;
  },

  [mutations.SET_ROOM]: (state, room) => {
    state.selectedRoom = room;
  },

  [mutations.UPDATE_USER]: (state, user) => {
    state.user = user;
  }
};
