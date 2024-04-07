import "./App.css";
import SideBar from "./components/SideBar";
import Map from "./components/Map";

export default function App() {
  return (
    <>
      <SideBar />
      <div className="p-6 sm:ml-64 h-full">
        <div className="container mx-auto border h-full">
          <Map/>
        </div>
      </div>
    </>
  );
}
