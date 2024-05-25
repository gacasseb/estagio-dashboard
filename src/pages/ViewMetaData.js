import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMetaData } from "../api/getTrap";

import SideBar from "../components/SideBar";
import MetaDataList from "../components/MetaDataList";

const ViewMetaData = () => {
  const { id } = useParams();
  const [metadatas, setMetaDatas] = useState([]);

  useEffect(() => {
    async function fetchTrap() {
      const trap = await getMetaData(id);
      setMetaDatas(trap);
    }
    fetchTrap();
  }, [id]);

  if (!id) return <h1>Trap not found</h1>;

  return (
    <>
      <SideBar />
      <div className="p-6 sm:ml-64 h-full">
        <MetaDataList metadatas={metadatas}/>
      </div>
    </>
  );
};

export default ViewMetaData;
