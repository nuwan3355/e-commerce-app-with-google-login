import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CommonLayout from "../common/CommonLayout";

export default function Cart() {
  const state = useSelector((state) => state.cartReducer.cartDetails);

  return (
    <CommonLayout>
      {state.length <= 0 ? (
        <p style={{ textAlign: "center", marginTop: "100px" }}>
          Cart is empty lets shopping!
        </p>
      ) : (
        <div style={{ margin: "100px 20px" }}>
          {state.map((val, key) => {
            return (
              <Grid
                key={key}
                container
                style={{
                  border: "1px solid teal",
                  maxWidth: "400px",
                  margin: "20px auto",
                }}
              >
                <Grid item xs={12} sm={6}>
                  <div
                    style={{
                      width: "150px",
                      height: "200px",
                      background: "white",
                      borderRadius: "20px",
                      margin: " auto",
                    }}
                  >
                    <img
                      src={val.product.image}
                      alt=""
                      style={{
                        width: "100px",
                        height: "150px",
                        margin: "20px",
                      }}
                    />
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <p>Category: {val.product.category}</p>
                  <p>Price: ${val.product.price}</p>
                  <p>Quantity: {val.quantity}</p>
                  <h5>Total Price: ${val.product.price * val.quantity}</h5>
                </Grid>
              </Grid>
            );
          })}
        </div>
      )}
    </CommonLayout>
  );
}
