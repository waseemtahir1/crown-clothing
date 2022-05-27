import React from "react";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import Button from "@mui/material/Button";

const AddRemoveCartButtons = () => {
  const [qty, setQty] = useState(0);
  const maxQtyRule = 9;
  const minQtyRule = 0;

  function Increment() {
    if (qty < maxQtyRule) {
      setQty(qty + 1);
    }
  }

  function Decrement() {
    if (qty > minQtyRule) {
      setQty(qty - 1);
    }
  }

  return (
    <div>
      <Stack direction="row" spacing={1}>
        <IconButton
          color="primary"
          aria-label="add to shopping cart"
          onClick={Decrement}
          size="small"
        >
          <RemoveShoppingCartIcon />
        </IconButton>
        <Button variant="outlined" disabled size="small">
          {qty}
        </Button>
        <IconButton
          color="primary"
          aria-label="add to shopping cart"
          onClick={Increment}
          size="small"
        >
          <AddShoppingCartIcon />
        </IconButton>
      </Stack>
    </div>
  );
};

export default AddRemoveCartButtons;
