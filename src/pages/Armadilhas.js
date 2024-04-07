import SideBar from "../components/SideBar";
import TrapList from "../components/TrapList";
import Modal from "../components/Modal";
import useModal from "../hooks/useModal";

const Armadilhas = () => {
  return (
    <>
      <SideBar />
      <div className="p-6 sm:ml-64 h-full">
        <TrapList />
        <Modal />
      </div>
    </>
  );
};

export default Armadilhas;
