import  React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export default function RatingBtn({ rate }) {
  return (
    <div style={{ width:"100%",marginTop:"30px" }}>
      <Stack spacing={2} style={{width:"50%",margin:"auto"}}>
        <Rating
          name="half-rating-read"
          defaultValue={rate}
          precision={0.1}
          readOnly
        />
      </Stack>
    </div>
  );
}
