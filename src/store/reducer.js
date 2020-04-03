import { SET_LOADING, SET_USERS, SET_OPEN_MAPS, SET_LOCATION } from "./actionTypes";
// INITIAL STATE
const initialState = {
  users: [],
  isLoading: false,
  openMaps: false,
  location: { lat: 48.0, lng: -122.0 }
};

export default (state = initialState, action) => {
  if (action.type === SET_USERS) 
    return { ...state, users: action.payload };
  if (action.type === SET_LOADING)
    return { ...state, isLoading: action.payload };
  if (action.type === SET_OPEN_MAPS)
    return { ...state, openMaps: action.payload };
  if (action.type === SET_LOCATION)
    return { ...state, location: action.payload };
  else return state;
};
