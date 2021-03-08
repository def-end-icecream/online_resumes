import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import UsersShow from "../views/UsersShow.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/users/:id",
    name: "users-show",
    component: UsersShow
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
