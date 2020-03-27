import Vue from "vue";
import Vuex from "vuex";
import * as actions from "./actions";
import * as getters from "./getters";
import mutations from "./mutations";

Vue.use(Vuex);

const state = {
  server: {
    online: true
  },
  user: {},
  rooms: [
  ],
  selectedRoom: {}
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
