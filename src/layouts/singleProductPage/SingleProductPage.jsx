import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import RatingBtn from "../../components/Home/singleProduct/RatingBtn";
import CountButton from "../../components/singleProduct/CountButton";
import CommonLayout from "../common/CommonLayout";
import AddToCart from "../../components/singleProduct/AddToCart";

export default function SingleProductPage() {
  const [count, setCount] = React.useState(1);
  const state = useSelector((state) => state.productListReducer.singleProduct);
  return (
    <CommonLayout>
      <Grid container>
        <Grid item xs={12} md={6}>
          <div
            style={{
              width: "330px",
              justifyContent: "center",
              display: "flex",
              background: "white",
              margin: "30px auto",
              borderRadius: "20px",
              height: "430px",
              paddingTop: "10px",
            }}
          >
            <img
              src={state.image}
              alt={state.id}
              style={{ width: "300px", height: "400px" }}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6} style={{ marginTop: "30px" }}>
          <h5
            style={{
              margin: "0px 10px",
              background: "#39b6cc",
              color: "white",
              padding: "10px",
              marginBottom: "20px",
            }}
          >
            {state.category}
          </h5>
          <p style={{ margin: "0px 20px" }}>{state.description}</p>

          <div style={{ display: "flex" }}>
            <p style={{ fontSize: "35px", margin: "20px" }}>${state.price}</p>
            <RatingBtn rate={state.rating && state.rating.rate} />
          </div>
          <CountButton count={count} setCount={setCount} />
          <div>
            <AddToCart product={state} quantity={count} />
          </div>
        </Grid>
      </Grid>
    </CommonLayout>
  );
}
