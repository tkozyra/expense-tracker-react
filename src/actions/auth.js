import AuthService from "../services/AuthService";
import {
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
  LOGOUT,
} from "./type";

export const signup = (username, email, password) => (dispatch) => {
  return AuthService.signup(username, email, password).then((response) =>
    response.json().then((data) => {
      console.log(response);
      if (!response.ok) {
        dispatch({ type: SIGNUP_FAILURE });
      } else {
        dispatch({ type: SIGNUP_SUCCESS });
      }
      return response;
    })
  );
};

export const signin = (username, password) => (dispatch) => {
  return AuthService.login(username, password).then((response) =>
    response.json().then((data) => {
      console.log(response);
      if (!response.ok) {
        dispatch({ type: SIGNIN_FAILURE });
      } else {
        if (data.accessToken) {
          localStorage.setItem("user", JSON.stringify(data));
        }
        dispatch({ type: SIGNIN_SUCCESS, payload: { user: data } });
      }
      return response;
    })
  );
};

export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: LOGOUT,
  });
};
