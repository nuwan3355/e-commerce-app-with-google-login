import axios from "axios";

export const FETCH_WOMENS_PRODUCT_BEGIN = "FETCH_WOMENS_PRODUCT_BEGIN";
export const FETCH_WOMENS_PRODUCT_SUCCESS = "FETCH_WOMENS_PRODUCT_SUCCESS";
export const FETCH_WOMENS_PRODUCT_FAILURE = "FETCH_WOMENS_PRODUCT_FAILURE";

export const womensClothAction = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_WOMENS_PRODUCT_BEGIN,
    });
    axios
      .get("https://fakestoreapi.com/products/category/women's clothing")
      .then((response) => {
        dispatch({
          type: FETCH_WOMENS_PRODUCT_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) =>
        dispatch({
          type: FETCH_WOMENS_PRODUCT_FAILURE,
        })
      );
  };
};
