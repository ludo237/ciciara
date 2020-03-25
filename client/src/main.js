import Vue from "vue";
import VueSocketIO from "vue-socket.io";
import SocketIO from "socket.io-client";
import App from "@/App.vue";
import "@/registerServiceWorker";
import router from "@/router";
import store from "@/store";
import "@/services/fonts";

Vue.config.productionTip = false;

Vue.use(new VueSocketIO({
  debug: true,
  connection: SocketIO("http://localhost:2370"),
  vuex: {
    store,
    actionPrefix: "CSA_",
    mutationPrefix: "CSM_"
  }
})
);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
