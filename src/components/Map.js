import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { markers } from "../mock/markers";

const MosqMap = () => {
  return (
    <>
      <APIProvider apiKey="AIzaSyCln3IuGBs0Z6zmbGIM0nttcS1cZcTzHqE">
        <Map
          zoom={13.1}
          center={{ lat: -25.532311, lng: -54.561045 }}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
          minZoom={13}
          restriction={{
            latLngBounds: {
              north: -25.409823,
              south: -25.589928,
              west: -54.592,
              east: -54.486475,
            },
          }}
          styles={[
            {
              featureType: "poi",
              elementType: "labels",
              stylers: [{ visibility: "off" }],
            },
          ]}
        >
          {markers.map((marker) => {
            return (
              <Marker
                key={marker.name}
                position={marker.position}
                clickable={true}
                onClick={() => {
                  console.log("Clicked on marker", marker);
                }}
                onDragEnd={(e) => {
                  const lat = e.latLng.lat();
                  const lng = e.latLng.lng();
                  console.log(marker.name, lat, lng)
                }}
                draggable={true}
              ></Marker>
            );
          })}
        </Map>
      </APIProvider>
    </>
  );
};

export default MosqMap;
