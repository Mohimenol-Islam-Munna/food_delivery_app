import axios from "axios";
import { FETCH_RESTAURENT_DATA, SHOP_PRODUCTS } from "../actions/actionTypes";

// get restaurent
export const getRestaurents = () => {
  return async (dispatch) => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    try {
      const res = await axios.get(
        "http://127.0.0.1:8000/api/restaurants/",
        config
      );

      console.log("restaurent data ::", res.data);

      dispatch({
        type: FETCH_RESTAURENT_DATA,
        payload: res.data,
      });
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        console.log("restaurent fetch error ::", errors);
      }
    }
  };
};

// get shop products
export const getShopProducts = (token) => {
  return async (dispatch) => {
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const res = await axios.get("http://127.0.0.1:8000/api/items/", config);

      console.log("shop products data ::", res.data);

      dispatch({
        type: SHOP_PRODUCTS,
        payload: res.data,
      });
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        console.log("restaurent fetch error ::", errors);
      }
    }
  };
};
