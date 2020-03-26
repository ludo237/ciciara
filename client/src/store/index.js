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
  auth: {
    username: ""
  },
  rooms: [
    { id: 1, name: "lounge", description: "main channel for everyone" },
    { id: 2, name: "memes", description: "a dedicated channel for memes" }
  ],
  selectedRoom: {}
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
