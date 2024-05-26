import { createBrowserRouter } from "react-router-dom";

import { editTrap, createTrap, viewMetaData, login } from "./routes";

import App from "./App";
import Armadilhas from "./pages/Armadilhas";
import EditTrap from "./pages/EditTrap";
import CreateTrap from "./pages/CreateTrap";
import ViewMetaData from "./pages/ViewMetaData";
import Login from "./pages/Login";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/armadilhas",
    element: <Armadilhas />,
  },
  {
    path: editTrap,
    element: <EditTrap />,
  },
  {
    path: createTrap,
    element: <CreateTrap />,
  },
  {
    path: viewMetaData,
    element: <ViewMetaData />,
  },
  {
    path: login,
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  }
];

const router = createBrowserRouter(routes);

export default router;
