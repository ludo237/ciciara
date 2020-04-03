import * as mutations from "./mutation-types";

export const socket_connect = ({ commit }) => {
  commit(mutations.SET_CICIARA_ONLINE);
};

export const socket_disconnect = ({ commit }) => {
  commit(mutations.SET_CICIARA_OFFLINE);
};
