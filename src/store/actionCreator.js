import { SET_USERS, SET_LOADING, SET_OPEN_MAPS, SET_LOCATION } from "./actionTypes";
import { db } from "../config/firebaseConfig";

export const setUsers = data => {
  return {
    type: SET_USERS,
    payload: data
  };
};

export const setLoading = status => {
  return {
    type: SET_LOADING,
    payload: status
  };
};

export const setOpenMaps = status => {
  return {
    type: SET_OPEN_MAPS,
    payload: status
  };
};

export const setLocation = location => {
  return {
    type: SET_LOCATION,
    payload: location
  };
};

export const fetchUsers = () => {
  return dispatch => {
    dispatch(setLoading(true));
    db.collection("employees")
      .get()
      .then(querySnapshot => {
        const datas = [];
        querySnapshot.forEach(doc => {
          datas.push(doc.data());
        });
        dispatch(setUsers(datas));
      })
      .catch(err => {
        console.log("SOMETHING IS WRONG!!!");
        console.log(err);
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
};
