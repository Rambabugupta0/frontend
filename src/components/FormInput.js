import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const FormInput = ({ selectedRegion, handleRegionChange }) => {
  return (
    <Select value={selectedRegion} onChange={handleRegionChange} style={{ width: 200, marginRight: 8 }}>
      <Option value="US">United States</Option>
      <Option value="IN">India</Option>
      <Option value="UK">United Kingdom</Option>
      {/* Add more regions as needed */}
    </Select>
  );
};

export default FormInput;
