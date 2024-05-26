import SideBar from "../components/SideBar";
import TrapList from "../components/TrapList";

import { isAuthenticated } from "../utils";
import { useNavigate } from "react-router-dom";
import { login } from "../routes";

const Armadilhas = () => {
  const navigate = useNavigate();
  if (!isAuthenticated()) {
    return navigate(login);
  }
  
  return (
    <>
      <SideBar />
      <div className="p-6 sm:ml-64 h-full">
        <TrapList />
      </div>
    </>
  );
};

export default Armadilhas;
