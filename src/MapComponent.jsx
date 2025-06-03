import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import stationData from "./data/odishaStations.json";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    setStations(stationData);
  }, []);

  return (
    <div style={{ height: "500px" }}>
      <MapContainer center={[20.95, 85.09]} zoom={7} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='© OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {stations.map((station, index) => (
          <Marker key={index} position={[station.lat, station.lng]}>
            <Popup>{station.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
