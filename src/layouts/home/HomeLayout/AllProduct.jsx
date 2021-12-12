import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import SingleProduct from "../../../components/Home/SingleProduct";
import CommonLayout from "../../common/CommonLayout";

export default function AllProduct() {
  const { loading, list } = useSelector((state) => state.productListReducer);
  return (
    <div>
      <CommonLayout>
        {loading && <p>Loading</p>}
        {list.length > 0 ? (
          <Grid container>
            {list.map((val, key) => {
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
