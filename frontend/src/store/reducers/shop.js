import { SHOP_PRODUCTS } from "../actions/actionTypes";

const initialState = [];

const shop = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SHOP_PRODUCTS:
      return [...payload];

    default:
      return state;
  }
};

export default shop;
