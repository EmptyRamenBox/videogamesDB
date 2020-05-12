import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Profile from "../views/Profile.vue";
import Search from "../views/Search.vue";
import Game from "../views/Game.vue";
import Library from "../views/Library.vue";
import Blog from "../views/Blog.vue";
import Wishlist from "../views/Wishlist.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
  {
    path: "/games/:id",
    name: "Game",
    component: Game,
  },
  // Experimental: Just to test Views
  {
    path: "/library",
    name: "Library",
    component: Library,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },

  {
    path: "/wishlist",
    name: "Wishlist",
    component: Wishlist,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
