import { SIGN_IN } from "../actions/login";
import { LOAD_USER } from "../actions/user";

export function reducer(state = {}, action) {
  switch (action.type) {
    case SIGN_IN: {
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token
      };
    }
    case LOAD_USER: {
      return {
        ...state,
        userData: action.payload
      };
    }
    default:
      return state;
  }
}
