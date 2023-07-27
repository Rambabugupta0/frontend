import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const OSMMap = ({ region }) => {
  const centerMap = {
    US: [37.09024, -95.712891],
    IN: [20.5937, 78.9629],
    UK: [51.509865, -0.118092],
    // Add more regions' coordinates as needed
  };

  return (
    <MapContainer
      center={centerMap[region]}
      zoom={5}
      style={{ height: '100vh', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Additional map layers and components can be added here */}
    </MapContainer>
  );
};

export default OSMMap;
