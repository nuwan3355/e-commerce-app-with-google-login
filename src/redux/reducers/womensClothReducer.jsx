import * as Actions from "../actions/womensClothAction";

const initialState = {
  womens_cloth: {},
  loading: null,
};
const womensClothReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.FETCH_WOMENS_PRODUCT_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case Actions.FETCH_WOMENS_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        womens_cloth: action.payload,
      };
    case Actions.FETCH_WOMENS_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default womensClothReducer;
