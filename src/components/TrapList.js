import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { markers } from "../mock/markers";
import { editTrap, listTraps } from "../routes";
import ListCard from "./ListCard";
import Modal2 from "./Modal2";
import { createTrap } from "../routes";
import ImportForm from "./ImportForm";

const TrapList = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [mark, setMark] = useState(null);
  const [traps, setTraps] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchTraps() {
      try {
        setLoading(true);
        const response = await fetch(listTraps);
        const traps = await response.json();
        setTraps(traps);
      } catch (error) {
        alert("Erro ao buscar armadilhas");
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    }
    fetchTraps();
  }, []);

  const handleEdit = (id) => {
    navigate(editTrap.replace(":id", id));
  };

  const handleOpenModal = (mark) => {
    console.log('mark', mark);
    setMark(mark);
    setIsOpen(true);
  };

  const getListCard = () => {
    const cards = traps.map((mark, index) => {
      return (
        <ListCard
          key={index}
          mark={mark}
          handleEdit={() => handleEdit(mark.id)}
          onClickImport={handleOpenModal}
        />
      );
    });

    return [
      ...cards,
      <div
        key="create"
        className="p-4 border rounded flex justify-center mb-3 hover:shadow-lg transition-all"
      >
        <div className="w-[300px] h-[40px] border-solid flex justify-center items-center">
          <button className="btn-primary" onClick={() => navigate(createTrap)}>
            Cadastrar armadilha
          </button>
        </div>
      </div>,
    ];
  };

  return (
    <>
      <div className="container p-6 mx-auto border h-full rounded">
        {getListCard()}
      </div>
      <Modal2 isOpen={isOpen} closeModal={() => setIsOpen(false)}>
        <ImportForm id={mark?.id} />
      </Modal2>
    </>
  );
};

export default TrapList;
