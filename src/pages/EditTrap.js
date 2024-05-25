import Container from "../components/Container";
import SideBar from "../components/SideBar";
import TrapForm from "../components/TrapForm";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getTrap } from '../api/getTrap';

const EditTrap = () => {
  const { id } = useParams();
  const [trap, setTrap] = useState(null);

  useEffect(() => {
    async function fetchTrap() {
      const trap = await getTrap(id);
      setTrap(trap);
    }
    fetchTrap();
  }, [id]);

  if (!id) {
    return <h1>Trap not found</h1>;
  }

  return (
    <>
      <SideBar />
      <Container>
        <TrapForm trap={trap}></TrapForm>
      </Container>
    </>
  );
};

export default EditTrap;
