import * as React from "react";

import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";
import ListItemText from "@mui/material/ListItemText";
import { Badge, Box, Tooltip } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid `,
    padding: "0 4px",
  },
}));

export default function ShoppingCartDropdown() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Quick View of Cart">
          <IconButton
            onClick={handleClick}
            aria-controls={open ? "cart-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            size="small"
            aria-label="cart"
            sx={{ my: 1, mx: 2 }}
            color="primary"
          >
            <StyledBadge badgeContent={4} color="secondary">
              <ShoppingCartIcon color="action" />
            </StyledBadge>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="cart-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuList dense>
          <MenuItem sx={{ p: 1 }} id="0">
            <h3>Your Cart is empty </h3>
          </MenuItem>

          <Divider />

          <MenuItem id="total0">
            <Link href="/Shoppingcart">Go to Shopping Cart</Link>
            <ListItemText inset>
              <h3>Total 0.00 AED</h3>
            </ListItemText>
          </MenuItem>
        </MenuList>
      </Menu>
    </React.Fragment>
  );
}
