import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { setSelectedRegion, setRegionInfo } from '../redux/actions';
import FormInput from './FormInput';

const FloatingControls = ({ selectedRegion, setSelectedRegion, setRegionInfo }) => {
  const handleRegionChange = (value) => {
    setSelectedRegion(value); // Update the selected region in the Redux store
  };

  const handleLoadClick = () => {
    // Simulate fetching region information based on the selected region
    // Replace this with actual API calls or data retrieval as needed
    const regionData = getRegionData(selectedRegion);
    setRegionInfo(regionData); // Update the region info in the Redux store
  };

  // Replace this with your actual logic to fetch region information
  const getRegionData = (region) => {
    let currency, speed, distance, volume, timezone;

    if (region === 'US') {
      currency = 'USD';
      speed = 'MPH';
      distance = 'Miles';
      volume = 'Gallons';
      timezone = 'UTC-4 to UTC-12';
    } else if (region === 'IN') {
      currency = 'INR';
      speed = 'KMPH';
      distance = 'Kilometers';
      volume = 'Liters';
      timezone = 'UTC+5:30';
    } else if (region === 'UK') {
      currency = 'GBP';
      speed = 'MPH';
      distance = 'Miles';
      volume = 'Liters';
      timezone = 'UTC+1';
    } else {
      currency = 'N/A';
      speed = 'N/A';
      distance = 'N/A';
      volume = 'N/A';
      timezone = 'N/A';
    }

    return {
      region,
      currency,
      speed,
      distance,
      volume,
      timezone,
    };
  };

  return (
    <div style={{ position: 'absolute', bottom: 20, left: 20 }}>
      <FormInput selectedRegion={selectedRegion} handleRegionChange={handleRegionChange} />
      <Button type="primary" onClick={handleLoadClick}>
        Load
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedRegion: state.selectedRegion,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedRegion: (region) => dispatch(setSelectedRegion(region)),
    setRegionInfo: (regionInfo) => dispatch(setRegionInfo(regionInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FloatingControls);
