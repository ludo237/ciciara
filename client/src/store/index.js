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
  user: {
    id: 2,
    bot: false,
    username: ""
  },
  rooms: [
    { id: 1, name: "lounge", description: "main channel for everyone", messages: [] },
    { id: 2, name: "memes", description: "a dedicated channel for memes", messages: [] }
  ],
  selectedRoom: {}
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
