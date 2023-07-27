import React from 'react';
import { Card } from 'antd';

const RegionInfoCard = ({ regionInfo }) => {
  if (!regionInfo) {
    return null; // Return null or a placeholder component when regionInfo is undefined or null
  }

  return (
    <Card title="Region Info" style={{ position: 'absolute', top: 20, right: 20, width: 300 }}>
      <p>Region: {regionInfo.region}</p>
      <p>Currency: {regionInfo.currency}</p>
      <p>Speed: {regionInfo.speed}</p>
      <p>Distance: {regionInfo.distance}</p>
      <p>Volume: {regionInfo.volume}</p>
      <p>Timezone: {regionInfo.timezone}</p>
      {/* Add more region information fields here */}
    </Card>
  );
};

export default RegionInfoCard;
