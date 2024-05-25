import "./App.css";
import SideBar from "./components/SideBar";
import Map from "./components/Map";
import Modal2 from "./components/Modal2";

import { useEffect, useState } from "react";
import { getTraps } from "./api/getTrap";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [marker, setMarker] = useState(null);
  const [traps, setTraps] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let traps = await getTraps();
      traps = traps.map(trap => ({
        ...trap,
        position: {
          lat: trap.latitude,
          lng: trap.longitude
        }
      }))
      console.log('traps', traps);
      setTraps(traps);
    }
    fetchData();
  }, []);

  const handleClickMarker = (marker) => {
    setMarker(marker)
    setIsOpen(true)
  }
  return (
    <>
      <SideBar />
      <div className="p-6 sm:ml-64 h-full">
        <div className="container mx-auto border h-full">
          <Map onClickMarker={handleClickMarker} markers={traps}/>
        </div>
      </div>
      <Modal2 isOpen={isOpen} closeModal={() => setIsOpen(false)}><p>{marker?.name}</p></Modal2>
    </>
  );
}
