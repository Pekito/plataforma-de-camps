import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Login from "@/views/Login";
import AreaInvalida from "@/views/404/AreaInvalida";
import Eventos from "./eventos";
import Resultados from "@/router/resultados";
import AreaDoUsuario from "@/views/AreaDoUsuario";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    component: AreaInvalida
  },
  {
    path: "/",
    component: Home
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/usuario",
    component: AreaDoUsuario,
    name: "areaDoUsuario"
  },
  ...Resultados,
  ...Eventos
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
