import { LOGIN_FAILURE, LOGIN_LOADING, LOGIN_SUCCESS } from "./actionTypes";

export const loginLoading = () => {
  return {
    type: LOGIN_LOADING,
  };
};

export const loginSuccess = (token) => {
  return {
    type: LOGIN_SUCCESS,
    payload: token,
  };
};

export const loginError = (err) => {
  return {
    type: LOGIN_FAILURE,
    payload: err,
  };
};

export const userLogin = (token) => (dispatch) => {
  dispatch(loginLoading());
  dispatch(loginSuccess(token));
};
