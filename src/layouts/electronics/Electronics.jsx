import React from "react";
import { Grid } from "@mui/material";
import CommonLayout from "../common/CommonLayout";
import {useSelector} from "react-redux"
import SingleProduct from "../../components/Home/SingleProduct"
export default function Electronics() {
     const {electronicList,loading} = useSelector(state => state.electronicProductReducer)

  return (
    <div>
      <CommonLayout> 
          
          
      {loading && <p>Loading</p>}
        {electronicList.length > 0 ? (
          <Grid container>
            {electronicList.map((val, key) => {
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
