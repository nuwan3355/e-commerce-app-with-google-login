import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import SingleProduct from "../../components/Home/SingleProduct";
import CommonLayout from "../common/CommonLayout";

export default function Jewelery() {
  const { jewelery, loading } = useSelector(
    (state) => state.jeweleryListReducer
  );
  return (
    <div>
      <CommonLayout>
        {loading && <p>Loading</p>}
        {jewelery.length > 0 ? (
          <Grid container>
            {jewelery.map((val, key) => {
              return (
                <Grid key={key} item xs={12} sm={6} md={4} lg={3}>
                  <SingleProduct item={val} />
                </Grid>
              );
            })}
          </Grid>
        ) : (
          ""
        )}
      </CommonLayout>
    </div>
  );
}
