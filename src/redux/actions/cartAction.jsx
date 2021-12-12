export const CART_PRODUCT_DETAILS = "CART_PRODUCT_DETAILS";

export const cartItem = (product) => {
  return (dispatch) => {
    dispatch({
      type: CART_PRODUCT_DETAILS,
      payload: product,
    });
  };
};
