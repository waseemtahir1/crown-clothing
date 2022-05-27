import * as React from "react";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";
import ListItemText from "@mui/material/ListItemText";

import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/system";

const CartDropdown = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Menu className="cart-dropdown-container">
        <MenuList dense>
          <MenuItem sx={{ p: 1 }} id="1">
            <img
              style={{ width: 100 }}
              src="https://dummyjson.com/image/i/products/1/thumbnail.jpg"
              alt=""
            />
            <Box flexDirection="column" sx={{ p: 2 }}>
              <ListItemText>If Product name is long</ListItemText>
              <ListItemText>1x100 AED</ListItemText>
            </Box>
            <IconButton color="primary">
              <CloseIcon />
            </IconButton>
          </MenuItem>

          <MenuItem sx={{ p: 1 }} id="1">
            <img
              style={{ width: 100 }}
              src="https://dummyjson.com/image/i/products/1/thumbnail.jpg"
              alt=""
            />
            <Box flexDirection="column" sx={{ p: 2 }}>
              <ListItemText>If Product name is long</ListItemText>
              <ListItemText>1x100 AED</ListItemText>
            </Box>
            <IconButton color="primary">
              <CloseIcon />
            </IconButton>
          </MenuItem>

          <MenuItem sx={{ p: 1 }} id="1">
            <img
              style={{ width: 100 }}
              src="https://dummyjson.com/image/i/products/1/thumbnail.jpg"
              alt=""
            />
            <Box flexDirection="column" sx={{ p: 2 }}>
              <ListItemText>If Product name is long</ListItemText>
              <ListItemText>1x100 AED</ListItemText>
            </Box>
            <IconButton color="primary">
              <CloseIcon />
            </IconButton>
          </MenuItem>

          <Divider />
          <MenuItem>
            <Link href="/Shoppingcart">Go to Shopping Cart</Link>
            <ListItemText inset>
              <h3>Total 6.63 AED</h3>
            </ListItemText>
          </MenuItem>
        </MenuList>
      </Menu>
    </React.Fragment>
  );
};

export default CartDropdown;
