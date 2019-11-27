import axios from "axios";

export const LOAD_USER = "LOAD_USER";

export const fetchUser = user => dispatch => {
  axios(`/users/${user}`).then(res => {
    dispatch({ type: LOAD_USER, payload: res.data });
  });
};
