import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getDetailsOfSingleProduct } from "../../redux/actions/productListAction";
import RatingBtn from "./singleProduct/RatingBtn";

export default function SingleProduct({ item }) {
  const dispatch = useDispatch()
  
  const handleClick = ()=>{
    dispatch(getDetailsOfSingleProduct(item))
  }
  return (
    <Link to="/single-product" style={{ textDecoration: "none", color:"teal"}} onClick={handleClick}>
      <div
        style={{
          height: "400px",
          textAlign: "center",
          margin: "20px",
          background: "white",
          paddingTop: "10px",
          borderRadius: "20px",
          cursor: "pointer",
        }}
      >
        <img
          src={item.image}
          alt={`product ${item.id}`}
          style={{ width: "200px", height: "250px" }}
        />
        <RatingBtn rate={item.rating.rate} />
        <h5 style={{ fontSize: "25px" }}>${item.price}</h5>
        
      </div>
    </Link>
  );
}
