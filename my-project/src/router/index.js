import { createRouter, createWebHistory } from "vue-router";
import SingUP from "../components/SingUp.vue";
import LogIn from "../components/LogIn.vue";

const routes = [
  {
    path: "/singup",
    name: "SingUP",
    component: SingUP,
  },
  {
    path: "/login",
    name: "LogIn",
    component: LogIn,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
