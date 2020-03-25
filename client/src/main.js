import Vue from "vue";
import VueSocketIO from "vue-socket.io-extended";
import SocketIO from "socket.io-client";
import App from "@/App.vue";
import "@/registerServiceWorker";
import router from "@/router";
import store from "@/store";
import "@/services/fonts";

const socket = SocketIO("http://localhost:2370");

Vue.config.productionTip = false;
Vue.use(VueSocketIO, socket, { store });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
