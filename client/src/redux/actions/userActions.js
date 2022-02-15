import {
  USER_LOGIN,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_SIGNUP,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_SUCCESS,
  UPDATE_USER_PROFILE,
  UPDATE_USER_PROFILE_FAIL,
  UPDATE_USER_PROFILE_SUCCESS,
  GET_CURRENT_USER,
  GET_CURRENT_USER_FAIL,
  GET_CURRENT_USER_SUCCESS,
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

export const update = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: UPDATE_USER_PROFILE });
    const { token } = getState().user;
    const config = {
      headers: {
        Authorization: token,
      },
    };
    console.log("old", token);
    const { data } = await axios.put("/api/users/current", user, config);
    console.log(data.token);
    dispatch({ type: UPDATE_USER_PROFILE_SUCCESS, payload: data.token });
    localStorage.setItem("token", JSON.stringify(getState().user.token));
  } catch (error) {
    const err = error?.response?.data?.message;
    dispatch({
      type: UPDATE_USER_PROFILE_FAIL,
      payload: err || error.message,
    });
  }
};
export const getCurrent = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_CURRENT_USER });
    const { token } = getState().user;
    const config = {
      headers: {
        Authorization: token,
      },
    };
    const { data } = await axios.get("/api/users/current", config);
    dispatch({ type: GET_CURRENT_USER_SUCCESS, payload: data });
  } catch (error) {
    const err = error?.response?.data?.message;
    dispatch({
      type: GET_CURRENT_USER_FAIL,
      payload: err || error.message,
    });
  }
};
export const logout = () => async (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: USER_LOGOUT });
};
