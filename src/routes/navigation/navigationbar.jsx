import { Outlet } from "react-router-dom";
import React, { useContext } from "react";
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

import { UserContext } from "../../contexts/user.context";
import UserContextMenu from "./userContextMenu";
import ShoppingCartDropdown from "../../components/ShoppingCartDropdown";
import CartIcon from "../../components/CartIcon";
import CartDropdown from "../../components/CartDropdown";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const NavigationBar = () => {
  const { currentUser } = useContext(UserContext);

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

          {currentUser ? (
            <UserContextMenu />
          ) : (
            <Link variant="outlined" color="secondary" href="/signin">
              Sign In
            </Link>
          )}
          <ShoppingCartDropdown />
        </Toolbar>
      </AppBar>
      <Outlet />
    </div>
  );
};

export default NavigationBar;
