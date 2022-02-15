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
} from "../actions/types";

export const userReducer = (state = { token: null, user: {} }, action) => {
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
    case UPDATE_USER_PROFILE:
      return { ...state, loading: true };
    case UPDATE_USER_PROFILE_SUCCESS:
      return { loading: false, token: action.payload };
    case UPDATE_USER_PROFILE_FAIL:
      return { ...state, loading: false, error: action.payload };
    case GET_CURRENT_USER:
      return { ...state, loading: true };
    case GET_CURRENT_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case GET_CURRENT_USER_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
