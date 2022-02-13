import {
  USER_LOGIN,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_SIGNUP,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_SUCCESS,
} from "../actions/types";

export const userReducer = (state = { token: null }, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return { loading: true, token: null };
    case USER_LOGIN_SUCCESS:
      return { loading: false, token: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return { token: null };
    case USER_SIGNUP:
      return { loading: true, token: null };
    case USER_SIGNUP_SUCCESS:
      return { loading: false, success: action.payload };
    case USER_SIGNUP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
