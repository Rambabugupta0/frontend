import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  return (
    <MapContainer
      center={[51.505, -0.09]} // Set your map center latitude and longitude here
      zoom={13} // Set the initial zoom level here
      style={{ height: '100vh', width: '100%',zIndex:1 }} // Adjust the height and width as needed
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Additional map layers and components can be added here */}
    </MapContainer>
  );
};

export default MapComponent;
