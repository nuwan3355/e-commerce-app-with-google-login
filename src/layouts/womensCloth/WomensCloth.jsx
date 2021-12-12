import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import SingleProduct from "../../components/Home/SingleProduct";
import CommonLayout from "../common/CommonLayout";

export default function WomensCloth() {
  const { womens_cloth, loading } = useSelector(
    (state) => state.womensClothReducer
  );
  return (
    <div>
      <CommonLayout>
        {loading && <p>Loading</p>}
        {womens_cloth.length > 0 ? (
          <Grid container>
            {womens_cloth.map((val, key) => {
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
