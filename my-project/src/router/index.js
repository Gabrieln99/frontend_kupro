import { createRouter, createWebHistory } from "vue-router";
import Landing from "../components/Landing.vue";
import SignUp from "../components/SignUp.vue";
import LogIn from "../components/LogIn.vue";
import Ulaz from "../components/Ulaz.vue";
import Glavna from "../components/Glavna.vue";
import Home from "../components/Home.vue";

const routes = [
  {
    path: "/",
    redirect: "/landing",
  },
  {
    path: "/glavna",
    name: "Glavna",
    component: Glavna, 
  },
  {
    path: "/ulaz",
    name: "Ulaz",
    component: Ulaz, 
  },
  {
    path: "/landing",
    name: "landing",
    component: Landing,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/login",
    name: "LogIn",
    component: LogIn,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
