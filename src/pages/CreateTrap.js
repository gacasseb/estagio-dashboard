import Container from "../components/Container";
import SideBar from "../components/SideBar";
import TrapForm from "../components/TrapForm";

const CreateTrap = () => {
  return (
    <>
      <SideBar />
      <Container>
        <TrapForm/>
      </Container>
    </>
  );
};

export default CreateTrap;
