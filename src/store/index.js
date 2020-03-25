import Vue from "vue";
import Vuex from "vuex";
import * as actions from "./actions";
import * as getters from "./getters";
import mutations from "./mutations";


Vue.use(Vuex);

const state = {
  user: {}, // Logged user data
  rooms: [], // Array of objects
  selectedRoom: {} // Currently selected room
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
