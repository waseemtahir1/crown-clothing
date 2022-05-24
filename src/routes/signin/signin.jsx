import * as React from "react";
import { useState, useContext } from "react";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import {
  signInWithGooglePopup,
  userSignInWithEmailAndPassword,
  createUserDocumentfromAuth,
} from "../../utils/firebase/firebaseutils";

import { UserContext } from "../../contexts/user.context";

import { Alert, AlertTitle, Snackbar, Stack } from "@mui/material";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const defaultSnackState = {
  open: false,
  vertical: "bottom",
  horizontal: "center",
  horizontal1: "left",
  myErrorMessage: "",
  variant: "",
};

const SignIn = () => {
  const { setCurrentUser } = useContext(UserContext);

  const [snackstate, setSnackState] = useState({
    defaultSnackState,
  });

  const {
    open,
    vertical,
    horizontal,
    myErrorMessage,
    autoHideDuration,
    variant,
  } = snackstate;

  const WrappedSnack = (props) => <Snackbar {...props} />;
  WrappedSnack.muiName = Snackbar.muiName;

  const handleClose = () => {
    setSnackState({
      open: false,
      vertical: "bottom",
      horizontal: "center",
      myErrorMessage: "",
      autoHideDuration: 3000,
      horizontal1: "left",
      variant: "",
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const email = data.get("email");
    const password = data.get("password");

    // const auth = getAuth();
    userSignInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        setCurrentUser(user);
        setSnackState({
          open: true,
          myErrorMessage: "User Successfully Sign In!!!",
          autoHideDuration: 3000,
          horizontal: "center",
          vertical: "bottom",
          horizontal1: "left",
          variant: "success",
        });
        // ...
      })
      .catch((error) => {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;

        setSnackState({
          open: true,
          myErrorMessage: errorCode + " : " + errorMessage,
          autoHideDuration: 3000,
          horizontal: "center",
          vertical: "bottom",
          horizontal1: "left",
          variant: "error",
        });
      });
  };

  const SignInWithGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    setCurrentUser(user);

    await createUserDocumentfromAuth(user);

    setSnackState({
      open: true,
      myErrorMessage: "User Login Successfully",
      autoHideDuration: 3000,
      horizontal: "center",
      vertical: "bottom",
      horizontal1: "left",
      variant: "success",
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Snackbar
          open={open}
          autoHideDuration={autoHideDuration}
          onClose={handleClose}
        >
          <Alert
            severity={variant === "error" ? "error" : "success"}
            color={variant === "error" ? "error" : "success"}
          >
            <AlertTitle>{variant}</AlertTitle>
            {myErrorMessage}
          </Alert>
        </Snackbar>

        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
            <img src="{photoURL}" alt="" />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Box>
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, mx: 1 }}
              >
                Sign In
              </Button>

              <Button
                onClick={SignInWithGoogleUser}
                variant="contained"
                startIcon={<GoogleIcon />}
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In with Google
              </Button>
            </Box>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};

export default SignIn;
