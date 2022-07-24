import { createRouter, createWebHistory } from "vue-router";
import ListaDeCompras from "../views/ListaDeCompras.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: ListaDeCompras,
    },
    {
      path: "/lista-compras",
      name: "home",
      component: ListaDeCompras,
    },
  ],
});

export default router;
