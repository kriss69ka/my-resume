import { SIGN_IN, REG_USER } from "../actions/login";
import { LOAD_USER, LOAD_USER_FAIL } from "../actions/user";

export function reducer(state = {}, action) {
  switch (action.type) {
    case SIGN_IN: {
      return {
        ...state,
        firebaseUser: action.payload.user
      };
    }
    case REG_USER: {
      return {
        ...state,
        registred: true
      };
    }
    case LOAD_USER: {
      return {
        ...state,
        userData: action.payload.userInfo,
        userDataLoaded: action.loaded,
        registred: true
      };
    }
    case LOAD_USER_FAIL: {
      return {
        ...state,
        userDataLoaded: action.loaded
      };
    }
    default:
      return state;
  }
}
