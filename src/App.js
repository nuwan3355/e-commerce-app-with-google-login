import React from "react";
import HomeLayout from "./layouts/home/HomeLayout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Electronics from "./layouts/electronics/Electronics";
import Jewelery from "./layouts/jewelery/Jewelery";
import MensCloth from "./layouts/mensCloth/MensCloth";
import WomensCloth from "./layouts/womensCloth/WomensCloth";
import Cart from "./layouts/cart/Cart";
import { useDispatch } from "react-redux";
import { allProduct } from "./redux/actions/productListAction";
import { electronicProduct } from "./redux/actions/electronicListAction";
import { jeweleryProduct } from "./redux/actions/jeweleryAction";
import { mensClothAction } from "./redux/actions/mensClothAction";
import { womensClothAction } from "./redux/actions/womensClothAction";
import SingleProductPage from "./layouts/singleProductPage/SingleProductPage";
import Login from "./layouts/login/Login";

function App() {
  const [showLoginBtn, setShowLoginBtn] = React.useState(true);
  const [showLogoutnBtn, setShowLogoutBtn] = React.useState(false);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(allProduct());
    dispatch(electronicProduct());
    dispatch(jeweleryProduct());
    dispatch(mensClothAction());
    dispatch(womensClothAction());
  }, [dispatch]);
  return (
    <div>
      <Router>
        {showLoginBtn ? (
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Login
                  showLoginBtn={showLoginBtn}
                  setShowLoginBtn={setShowLoginBtn}
                  showLogoutnBtn={showLogoutnBtn}
                  setShowLogoutBtn={setShowLogoutBtn}
                />
              }
            />
          </Routes>
        ) : (
          <Routes>
            <Route
              path="/home"
              element={
                <HomeLayout  />
              }
            />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/jewelery" element={<Jewelery />} />
            <Route path="/mens-cloth" element={<MensCloth />} />
            <Route path="/womens-cloth" element={<WomensCloth />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/single-product" element={<SingleProductPage />} />
            <Route path="*" element={<HomeLayout />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
