import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  DISH_TYPE_AFTER_REGISTRATION,
} from "../actions/actionTypes";

const initialState = {
  token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
  isAuthenticated: localStorage.getItem("token") ? true : false,
  isRegistered: false,
  isDishType: false,
  user: {},
};

const auth = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isRegistered: true,
      };

    case DISH_TYPE_AFTER_REGISTRATION:
      return {
        ...state,
        isDishType: true,
      };

    case LOGIN_SUCCESS:
      localStorage.setItem("token", JSON.stringify(payload.access));
      return {
        ...state,
        token: payload.access,
        isAuthenticated: true,
        user: payload,
      };

    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default auth;
