import ResultadosSemana from "@/views/Resultados da Semana/ResultadosSemana";
import ResultadosEvento from "@/views/Resultados da Semana/ResultadosEvento";

export default [
  {
    path: "/resultados",
    component: ResultadosSemana,
    name: "resultadosdasemana"
  },
  {
    path: "/resultados/:evento",
    component: ResultadosEvento,
    name: "resultadosEvento"
  }
];
