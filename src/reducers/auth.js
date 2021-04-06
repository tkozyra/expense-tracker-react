import {
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
  LOGOUT,
} from "../actions/type";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };
    case SIGNIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
