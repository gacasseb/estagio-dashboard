import useModal from '../hooks/useModal'

const ListCard = ({ name, handleEdit }) => {
  const { toggle } = useModal();
  return (
    <div className="p-4 border rounded flex justify-between mb-3 hover:shadow-lg transition-all ">
      <div>{name}</div>
      <div className="actions">
        <a
          href="#"
          onClick={handleEdit}
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-4"
        >
          Editar
        </a>
        <button
          class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          onClick={() => toggle()}
        >
          Importar dados
        </button>
      </div>
    </div>
  );
};

export default ListCard;
