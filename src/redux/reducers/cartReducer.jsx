import * as Actions from "../actions/cartAction";
const initialState = {
  cartDetails: [],
};
const cartReducer = (state = initialState, action) => {

  switch (action.type) {
    case Actions.CART_PRODUCT_DETAILS:
      return {
        ...state,
        cartDetails: [...state.cartDetails,action.payload],
      };
    default:
      return state;
  }
};

export default cartReducer
