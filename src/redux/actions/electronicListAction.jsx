import axios from "axios";

export const FETCH_ELECTRIC_PRODUCT_BEGIN = "FETCH_ELECTRIC_PRODUCT_BEGIN";
export const FETCH_ELECTRIC_PRODUCT_SUCCESS = "FETCH_ELECTRIC_PRODUCT_SUCCESS";
export const FETCH_ELECTRIC_PRODUCT_FAILURE = "FETCH_ELECTRIC_PRODUCT_FAILURE";

export const electronicProduct = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_ELECTRIC_PRODUCT_BEGIN,
    });
    axios
      .get("https://fakestoreapi.com/products/category/electronics")
      .then((response) => {
        dispatch({
          type: FETCH_ELECTRIC_PRODUCT_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) =>
        dispatch({
          type: FETCH_ELECTRIC_PRODUCT_FAILURE,
        })
      );
  };
};
