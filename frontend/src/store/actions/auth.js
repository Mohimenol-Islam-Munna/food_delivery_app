import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  DISH_TYPE_AFTER_REGISTRATION,
} from "./actionTypes";

// register
export const registration = (data, setShow) => async (dispatch) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  const body = JSON.stringify(data);

  try {
    const res = await axios.post(
      "http://127.0.0.1:8000/api/register/",
      body,
      config
    );

    setShow(true);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      console.log(" registration error :: ", errors);
    }
  }
};

// login
export const login = ({ username, password }) => {
  return async (dispatch) => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const data = JSON.stringify({ username, password });

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/login/",
        data,
        config
      );

      console.log("data in login action ::", res.data);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        console.log(errors);
      }

      dispatch({
        type: LOGIN_FAIL,
      });
    }
  };
};

// dish type after registration
export const dishTypeActionHandler = (data, token) => {
  console.log("token in dish type action handler ", token);
  return async (dispatch) => {
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token || localStorage.token}`,
      },
    };

    const body = JSON.stringify(data);

    try {
      const res = await axios.put(
        "http://127.0.0.1:8000/api/profile/update/",
        body,
        config
      );

      console.log("dish type ::", res.data);

      dispatch({
        type: DISH_TYPE_AFTER_REGISTRATION,
        payload: res.data,
      });
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        console.log("dish type error ::", errors);
      }
    }
  };
};
