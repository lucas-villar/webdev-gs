import { createBrowserRouter } from "react-router";
import Home from "./components/Home";
import Solucao from "./components/Solucao";
import Sobre from "./components/Sobre";
import Login from "./components/Login";
import Cadastrar from "./components/Cadastrar";
import Error from "./components/Error";

const router = createBrowserRouter([
  { path: "/", Component: Home },
  { path: "/Sobre", Component: Sobre },
  { path: "/Solucao", Component: Solucao },
  { path: "/Login", Component: Login },
  { path: "/Cadastrar", Component: Cadastrar },
  { path: "*", Component: Error },
]);

export default router