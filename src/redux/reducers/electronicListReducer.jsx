import * as Actions from "../actions/electronicListAction";

const initialState = {
  electronicList: {},
  loading: null,
};
const electronicProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.FETCH_ELECTRIC_PRODUCT_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case Actions.FETCH_ELECTRIC_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        electronicList: action.payload,
      };
    case Actions.FETCH_ELECTRIC_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default electronicProductReducer;
