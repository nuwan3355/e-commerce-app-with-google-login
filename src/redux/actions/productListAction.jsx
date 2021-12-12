import axios from "axios";

export const FETCH_ALL_LIST_BEGIN = " FETCH_ALL_LIST_BEGIN";
export const FETCH_ALL_LIST_SUCCESS = " FETCH_ALL_LIST_SUCCESS";
export const FETCH_ALL_LIST_FAILIURE = " FETCH_ALL_LIST_FAILIURE";
export const FETCH_DETAILS_OF_SINGLE_PRODUCT =
  "FETCH_DETAILS_OF_SINGLE_PRODUCT";

export const allProduct = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_ALL_LIST_BEGIN,
    });
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        dispatch({
          type: FETCH_ALL_LIST_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_ALL_LIST_FAILIURE,
        });
      });
  };
};

export const getDetailsOfSingleProduct = (product)=>{
  return (dispatch)=>{
    dispatch({
      type:FETCH_DETAILS_OF_SINGLE_PRODUCT,
      payload:product
    })
  }
}