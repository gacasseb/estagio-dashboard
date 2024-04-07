import { useNavigate } from "react-router-dom";

import { markers } from "../mock/markers";
import { editTrap } from "../routes";
import ListCard from "./ListCard";

const TrapList = () => {
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(editTrap.replace(":id", id));
  };

  return (
    <>
      <div className="container p-6 mx-auto border h-full rounded">
        {markers.map((mark, index) => {
          return (
            <ListCard
              key={index}
              name={mark.name}
              handleEdit={() => handleEdit(mark.id)}
            />
          );
        })}
      </div>
    </>
  );
};

export default TrapList;
