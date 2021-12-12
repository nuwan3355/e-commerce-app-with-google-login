import React from "react";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import TextField from "@mui/material/TextField";

export default function CountButton({count, setCount}) {
 
  const handleRemove = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const handleAdd = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };
  return (
    <div style={{margin:"20px"}}>
      <IconButton aria-label="fingerprint" onClick={handleRemove}>
        <RemoveIcon style={{ fontSize: "40px", background: "white" }} />
      </IconButton>
      <TextField
        variant="filled"
        color="success"
        focused
        type="number"
        value={count}
      />
      <IconButton aria-label="fingerprint" onClick={handleAdd}>
        <AddIcon style={{ fontSize: "40px", background: "white" }} />
      </IconButton>
    </div>
  );
}
