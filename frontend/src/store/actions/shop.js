import axios from "axios";
import { SHOP_PRODUCTS } from "../actions/actionTypes";

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

      dispatch({
        type: SHOP_PRODUCTS,
        payload: res.data,
      });
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        console.log("shop products fetch error ::", errors);
      }
    }
  };
};
