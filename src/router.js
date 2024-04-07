import { createBrowserRouter } from "react-router-dom";

import { editTrap } from "./routes";

import App from "./App";
import Armadilhas from "./pages/Armadilhas";
import EditTrap from "./pages/EditTrap";

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
]);

export default router;
