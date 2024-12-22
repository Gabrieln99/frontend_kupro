import { createRouter, createWebHistory } from "vue-router";
import SingUP from "../components/SingUp.vue";

const routes = [
  {
    path: "/signup",
    name: "SingUP",
    component: SingUP,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
