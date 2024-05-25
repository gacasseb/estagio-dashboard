import { createBrowserRouter } from "react-router-dom";

import { editTrap, createTrap, viewMetaData } from "./routes";

import App from "./App";
import Armadilhas from "./pages/Armadilhas";
import EditTrap from "./pages/EditTrap";
import CreateTrap from "./pages/CreateTrap";
import ViewMetaData from "./pages/ViewMetaData";

const router = createBrowserRouter([
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
  }
]);

export default router;
