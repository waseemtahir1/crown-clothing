import { Outlet } from "react-router-dom";
import React from "react";
import {
  AppBar,
  Button,
  Badge,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { ReactComponent as Crown } from "../../assets/crown.svg";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const NavigationBar = () => {
  return (
    <div>
      <AppBar
        position="sticky"
        color="primary"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            <Link href="/" sx={{ m: 1 }}>
              <Crown color="secondary" />
            </Link>
            <Link href="/" underline="none" color="text.primary">
              Crown Clothing
            </Link>
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="/shop"
              sx={{ my: 1, mx: 1.5 }}
            >
              Shop
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="/about"
              sx={{ my: 1, mx: 1.5 }}
            >
              About
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="/contactus"
              sx={{ my: 1, mx: 1.5 }}
            >
              Contact Us
            </Link>
          </nav>
          <Link variant="outlined" color="secondary" href="/signin">
            Login
          </Link>
          <Link href="/shoppingcart">
            <IconButton aria-label="cart" sx={{ my: 1, mx: 2 }} color="default">
              <StyledBadge badgeContent={4} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
      <Outlet />
    </div>
  );
};

export default NavigationBar;
