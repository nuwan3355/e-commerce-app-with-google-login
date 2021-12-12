import * as Actions from "../actions/mensClothAction";

const initialState = {
  mens_cloth: {},
  loading: null,
};
const mensClothReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.FETCH_MENS_PRODUCT_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case Actions.FETCH_MENS_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        mens_cloth: action.payload,
      };
    case Actions.FETCH_MENS_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default mensClothReducer;
