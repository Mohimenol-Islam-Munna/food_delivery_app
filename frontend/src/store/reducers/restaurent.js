import { FETCH_RESTAURENT_DATA, SHOP_PRODUCTS } from "../actions/actionTypes";

const initialState = [];

const restaurents = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_RESTAURENT_DATA:
      return [...payload];

    case SHOP_PRODUCTS:
      return [...payload];

    default:
      return state;
  }
};

export default restaurents;
