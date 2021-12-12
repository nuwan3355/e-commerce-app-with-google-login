import * as Actions from "../actions/jeweleryAction";

const initialState = {
  jewelery: {},
  loading: null,
};
const jeweleryListReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.FETCH_JEWELERY_PRODUCT_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case Actions.FETCH_JEWELERY_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        jewelery: action.payload,
      };
    case Actions.FETCH_JEWELERY_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default jeweleryListReducer;
