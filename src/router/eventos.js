import Cubo333 from "@/views/Competir/Eventos/Cubo333";
import Cubo444 from "@/views/Competir/Eventos/Cubo444";
import Cubo222 from "@/views/Competir/Eventos/Cubo222";
import Competir from "@/views/Competir/Competir";

export default [
  {
    path: "/competir",
    component: Competir,
    name: "competir"
  },
  {
    path: "/competir/333",
    component: Cubo333,
    name: "cubo333"
  },
  {
    path: "/competir/444",
    component: Cubo444,
    name: "cubo444"
  },
  {
    path: "/competir/222",
    component: Cubo222,
    name: "cubo222"
  }
];
