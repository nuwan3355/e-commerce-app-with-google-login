import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import SingleProduct from "../../components/Home/SingleProduct";
import CommonLayout from "../common/CommonLayout";

export default function MensCloth() {
    const { mens_cloth,loading} = useSelector(state => state.mensClothReducer)
  return (
    <div>
      <CommonLayout>
               
      {loading && <p>Loading</p>}
        { mens_cloth.length > 0 ? (
          <Grid container>
            { mens_cloth.map((val, key) => {
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
