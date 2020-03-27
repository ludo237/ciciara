import * as mutations from "./mutation-types";

export const login = async ({ commit }, payload) => {
  // This is stupid right now because we don't have an API call here but
  // it will have sense in the future
  return new Promise(resolve => {
    commit(mutations.LOGIN, {
      username: payload.username,
      roomId: parseInt(payload.room)
    });

    resolve();
  });
};

export const socket_connect = ({ commit }) => {
  commit(mutations.SET_CICIARA_ONLINE);
};

export const socket_disconnect = ({ commit }) => {
  commit(mutations.SET_CICIARA_OFFLINE);
};

export const socket_messageBroadcast = ({ commit }, message) => {
  commit(mutations.APPEND_MESSAGE, message);
}

export const socket_message = ({ commit }, message) => {
  commit(mutations.APPEND_MESSAGE, message);
}
