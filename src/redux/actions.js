import * as actionTypes from './actionTypes';

export const setSelectedRegion = (region) => {
  return {
    type: actionTypes.SET_SELECTED_REGION,
    payload: region,
  };
};

export const setRegionInfo = (regionInfo) => {
    return {
      type: actionTypes.SET_REGION_INFO,
      payload: regionInfo,
    };
  };