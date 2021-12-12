import React from "react";
import Footer from "../../components/common/Footer";
import NavBar from "../../components/common/NavBar";

export default function CommonLayout(prop) {
  return (
    <div>
      <NavBar />
      <div style={{ margin: "70px 0px 40px 0px" }}>{prop.children}</div>
      <Footer />
    </div>
  );
}
