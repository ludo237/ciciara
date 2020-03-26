import Vue from "vue";
import VueRouter from "vue-router";
import LoginView from "@/views/LoginView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView
  },
  {
    path: "/rooms/:room",
    name: "room",
    component: () =>
      import(/* webpackChunkName: "room-view" */ "@/views/RoomView.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
