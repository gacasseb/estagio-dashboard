import SideBar from "../components/SideBar";
import TrapList from "../components/TrapList";

const Armadilhas = () => {
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
