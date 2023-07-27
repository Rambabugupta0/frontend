import * as actionTypes from './actionTypes';

const initialState = {
  selectedRegion: '',
  regionInfo: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SELECTED_REGION:
      return {
        ...state,
        selectedRegion: action.payload,
      };
    case actionTypes.SET_REGION_INFO:
      return {
        ...state,
        regionInfo: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
