import axios from "axios";

export const LOAD_USER = "LOAD_USER";
export const LOAD_USER_FAIL = "LOAD_USER_FAIL";

export const fetchUser = user => dispatch =>
  axios(`/api/user/${user}`)
    .then(res => {
      dispatch({ type: LOAD_USER, payload: res.data, loaded: true });
    })
    .catch(() => dispatch({ type: LOAD_USER_FAIL, loaded: false }));
