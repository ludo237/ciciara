import Vue from "vue";
import VueRouter from "vue-router";
import LoginView from "@/views/LoginView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: LoginView
  },
  {
    path: "/rooms",
    name: "Rooms",
    component: () => import(/* webpackChunkName: "rooms-view" */ "@/views/RoomsView.vue"),
  },
  {
    path: "/rooms/:room",
    name: "Room",
    component: () => import(/* webpackChunkName: "room-view" */ "@/views/RoomView.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
