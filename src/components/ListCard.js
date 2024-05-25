import { useNavigate } from "react-router-dom";
import { viewMetaData } from "../routes";

const ListCard = ({ handleEdit, mark, onClickImport, onClickVisualize }) => {
  const { name } = mark;
  const navigate = useNavigate();
  return (
    <div className="p-4 border rounded flex justify-between mb-3 hover:shadow-lg transition-all ">
      <div className="flex items-center">{name}</div>
      <div className="actions flex">
        <button
          href="#"
          onClick={handleEdit}
          className="btn-primary mr-4"
        >
          Editar
        </button>
        <button
          className="btn-primary mr-4"
          onClick={() => navigate(viewMetaData.replace(":id", mark.id))}
        >
          Visualizar dados
        </button>
        <button
          className="btn-primary"
          onClick={() => {
            typeof onClickImport === "function" && onClickImport(mark);
          }}
        >
          Importar dados
        </button>
      </div>
    </div>
  );
};

export default ListCard;
