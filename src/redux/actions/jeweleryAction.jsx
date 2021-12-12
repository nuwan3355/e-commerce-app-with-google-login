import axios from "axios";

export const FETCH_JEWELERY_PRODUCT_BEGIN = "FETCH_JEWELERY_PRODUCT_BEGIN";
export const FETCH_JEWELERY_PRODUCT_SUCCESS = "FETCH_JEWELERY_PRODUCT_SUCCESS";
export const FETCH_JEWELERY_PRODUCT_FAILURE = "FETCH_JEWELERY_PRODUCT_FAILURE";

export const jeweleryProduct = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_JEWELERY_PRODUCT_BEGIN,
    });
    axios
      .get("https://fakestoreapi.com/products/category/jewelery")
      .then((response) => {
        dispatch({
          type: FETCH_JEWELERY_PRODUCT_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) =>
        dispatch({
          type: FETCH_JEWELERY_PRODUCT_FAILURE,
        })
      );
  };
};
