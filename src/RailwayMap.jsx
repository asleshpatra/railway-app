/* 
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const stations = [
  { name: "Talcher", lat: 20.9495, lng: 85.2333 },
  { name: "Cuttack", lat: 20.4625, lng: 85.8828 },
  { name: "Bhubaneswar", lat: 20.2961, lng: 85.8245 },
];

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 20.5,
  lng: 85.5,
};

const RailwayMap = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyB7ET0wK6NMmiPX1HUAThIjfDbCxXq_A6c">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={8}>
        {stations.map((station, index) => (
          <Marker
            key={index}
            position={{ lat: station.lat, lng: station.lng }}
            title={station.name}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default RailwayMap;
*/
  
///////////////////////////////////////////////////////////////////////////////////////////



import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix Leaflet marker icon issues
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Odisha railway stations dataset
const stations = [
  { "name": "Bhubaneswar", "code": "BBS", "lat": 20.2656, "lng": 85.8431 },
  { "name": "Cuttack", "code": "CTC", "lat": 20.4625, "lng": 85.8828 },
  { "name": "Puri", "code": "PURI", "lat": 19.8135, "lng": 85.8312 },
  { "name": "Khurda Road Junction", "code": "KUR", "lat": 20.1520, "lng": 85.7082 },
  { "name": "Balasore", "code": "BLS", "lat": 21.4942, "lng": 86.9335 },
  { "name": "Brahmapur", "code": "BAM", "lat": 19.3149, "lng": 84.7914 },
  { "name": "Bhadrak", "code": "BHC", "lat": 21.0571, "lng": 86.5156 },
  { "name": "Jharsuguda Junction", "code": "JSG", "lat": 21.8555, "lng": 84.0069 },
  { "name": "Rourkela", "code": "ROU", "lat": 22.2604, "lng": 84.8536 },
  { "name": "Sambalpur", "code": "SBP", "lat": 21.4700, "lng": 83.9701 },
  { "name": "Jajpur Keonjhar Road", "code": "JJKR", "lat": 20.8500, "lng": 86.3400 },
   { "name": "Balugaon", "code": "BALU", "lat": 19.7640, "lng": 85.1700 },
  { "name": "Titlagarh", "code": "TIG", "lat": 20.2900, "lng": 83.1500 },
  { "name": "Rayagada", "code": "RGDA", "lat": 19.1700, "lng": 83.4200 },
  { "name": "Angul", "code": "ANGL", "lat": 20.8400, "lng": 85.1000 },
  { "name": "Dhenkanal", "code": "DNKL", "lat": 20.6500, "lng": 85.6000 },
  { "name": "Koraput", "code": "KRPU", "lat": 18.8100, "lng": 82.7100 },
  { "name": "Barbil", "code": "BBN", "lat": 22.1000, "lng": 85.4000 },
  { "name": "Sundargarh", "code": "SDGR", "lat": 22.1200, "lng": 84.0300 },
  { "name": "Berhampur", "code": "BAM", "lat": 19.3149, "lng": 84.7914 }
];

const RailwayMap = () => {
  return (
    <MapContainer center={[20.95, 85.1]} zoom={7} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {stations.map((station, index) => (
        <Marker key={index} position={[station.lat, station.lng]}>
          <Popup>
            <strong>{station.name}</strong><br />
            Code: {station.code}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default RailwayMap;
