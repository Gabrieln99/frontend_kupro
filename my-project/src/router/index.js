import { createRouter, createWebHistory } from "vue-router";
import Landing from "../components/Landing.vue";
import SignUp from "../components/SignUp.vue";
import LogIn from "../components/LogIn.vue";
import Ulaz from "../components/Ulaz.vue";

const routes = [
  {
    path: "/",
    redirect: "/landing",
  },
  {
    path: "/ulaz",
    name: "Ulaz",
    component: Ulaz,  // ✔️ Ispravljen problem
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
