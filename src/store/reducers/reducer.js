import { SIGN_IN } from "../actions/login";

export function reducer(state = {}, action) {
  console.log(state, action);
  switch (action.type) {
    case SIGN_IN: {
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token
      };
    }
    default:
      return state;
  }
}
