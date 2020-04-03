import * as actions from "./actions";
import * as getters from "./getters";
import mutations from "./mutations";

const state = {
  user: {}
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
