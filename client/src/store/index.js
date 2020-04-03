import Vue from "vue";
import Vuex from "vuex";
import * as actions from "./actions";
import * as getters from "./getters";
import mutations from "./mutations";

// Modules
import oauth from "./modules/oauth";
import rooms from "./modules/rooms";

Vue.use(Vuex);

const state = {
  server: {
    online: true
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    oauth,
    rooms
  }
});
