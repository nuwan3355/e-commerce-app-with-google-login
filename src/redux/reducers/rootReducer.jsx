import { combineReducers } from "redux";
import productListReducer from "./productListReducer";
import electronicProductReducer from "./electronicListReducer";
import jeweleryListReducer from "./jeweleryListReducer";
import mensClothReducer from "./mensClothReducer";
import womensClothReducer from "./womensClothReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  productListReducer,
  electronicProductReducer,
  jeweleryListReducer,
  mensClothReducer,
  womensClothReducer,
  cartReducer,
});

export default rootReducer;
