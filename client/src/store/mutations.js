import * as mutations from "./mutation-types";

export default {
  [mutations.SET_CICIARA_ONLINE]: state => {
    state.server.online = true;
  },

  [mutations.SET_CICIARA_OFFLINE]: state => {
    state.server.online = false;
  }
};
