import * as mutations from "./mutation-types";

export default {
  [mutations.LOGIN]: (state, { username }) => {
    state.user.username = username;
  },

  [mutations.UPDATE_USER]: (state, user) => {
    state.user = user;
  }
};
