import axios from "axios";

export const FETCH_MENS_PRODUCT_BEGIN = "FETCH_MENS_PRODUCT_BEGIN";
export const FETCH_MENS_PRODUCT_SUCCESS = "FETCH_MENS_PRODUCT_SUCCESS";
export const FETCH_MENS_PRODUCT_FAILURE = "FETCH_MENS_PRODUCT_FAILURE";

export const mensClothAction = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_MENS_PRODUCT_BEGIN,
    });
    axios
      .get("https://fakestoreapi.com/products/category/men's clothing")
      .then((response) => {
        dispatch({
          type: FETCH_MENS_PRODUCT_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) =>
        dispatch({
          type: FETCH_MENS_PRODUCT_FAILURE,
        })
      );
  };
};
