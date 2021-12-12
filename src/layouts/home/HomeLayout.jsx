import React from "react";
import AllProduct from "./HomeLayout/AllProduct";

export default function HomeLayout({
  setShowLoginBtn,
  setShowLogoutBtn,
  showLogoutnBtn,
}) {
  return (
    <div>
      <AllProduct />
    </div>
  );
}
