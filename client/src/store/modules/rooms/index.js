import * as actions from "./actions";
import * as getters from "./getters";
import mutations from "./mutations";

const state = {
  rooms: [],
  room: {}
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
