import * as mutations from "./mutation-types";

export const socket_message = ({ commit }, message) => {
  commit(mutations.APPEND_MESSAGE, message);
};

export const socket_roomsInfo = ({ commit }, { rooms }) => {
  commit(mutations.SET_ROOMS, rooms);
};

export const socket_roomInfo = ({ commit }, { room }) => {
  commit(mutations.SET_ROOM, room);
};
