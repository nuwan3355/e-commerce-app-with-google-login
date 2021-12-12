import React from "react";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
import { cartItem } from "../../redux/actions/cartAction";

export default function AddToCart({ product, quantity }) {
  const dispatch = useDispatch();

  const handleCart = () => {
    dispatch(cartItem({
        product:product,
        quantity: quantity,
      })
    );
  };
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="contained"
        endIcon={<AddShoppingCartIcon />}
        style={{
          width: "60%",
          margin: "20px 10px 20px auto",
          height: "50px",
          background: "aqua",
          color: "teal",
          fontWeight: 600,
          fontSize: "20px",
        }}
        onClick={handleCart}
      >
        Add To Cart
      </Button>
    </Stack>
  );
}
