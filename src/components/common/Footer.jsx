import React from "react";
const d = new Date();
let year = d.getFullYear();
export default function Footer() {
  return (
    <div
      style={{
        background: "#38cacf",
        position: "fixed",
        bottom: "0px",
        width: "100%",
        padding: "10px 0px",
        textAlign:"center"
      }}
    >
     © Nuwan Harsha Pradeep {year}
    </div>
  );
}
