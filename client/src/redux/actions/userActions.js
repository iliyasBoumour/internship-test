import {
  USER_LOGIN,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_SIGNUP,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_SUCCESS,
} from "./types";
import axios from "axios";

export const login = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_LOGIN });
    const { data } = await axios.post("/api/auth/login", user);
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data.token });
    localStorage.setItem("token", JSON.stringify(getState().user.token));
  } catch (error) {
    const err = error?.response?.data?.message;
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: err || error.message,
    });
  }
};
export const signup = (user) => async (dispatch) => {
  try {
    dispatch({ type: USER_SIGNUP });
    await axios.post("/api/auth/register", user);
    dispatch({ type: USER_SIGNUP_SUCCESS, payload: true });
  } catch (error) {
    const err = error?.response?.data?.message;
    dispatch({
      type: USER_SIGNUP_FAIL,
      payload: err || error.message,
    });
  }
};
export const logout = () => async (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: USER_LOGOUT });
};
