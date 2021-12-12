import * as Actions from "../actions/productListAction";

const initialState = {
  loading: null,
  list: [],
  singleProduct: {},
};

const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.FETCH_ALL_LIST_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case Actions.FETCH_ALL_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    case Actions.FETCH_ALL_LIST_FAILIURE:
      return {
        ...state,
        loading: false,
      };
    case Actions.FETCH_DETAILS_OF_SINGLE_PRODUCT:
      return {
        ...state,
        singleProduct: action.payload,
      };
    default:
      return state;
  }
};

export default productListReducer;
