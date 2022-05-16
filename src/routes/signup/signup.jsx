import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  createAutUserEmailAndPassword,
  createUserDocumentfromAuth,
} from "../../utils/firebase/firebaseutils";
import { Alert, AlertTitle } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";

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

const defaultFormValues = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignUp() {
  const [state, setState] = useState({
    open: false,
    Myerror: "",
    vertical: "bottom",
    horizontal: "center",
    autoHideDuration: 3000,
  });

  const { Myerror, open, vertical, horizontal, autoHideDuration } = state;

  const handleClose = () => {
    setState({
      vertical: "bottom",
      horizontal: "center",
      open: false,
      Myerror: "",
      autoHideDuration: 3000,
    });
  };

  const [formFields, setFormFields] = useState(defaultFormValues);

  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (password !== confirmPassword) {
        setState({
          vertical: "bottom",
          horizontal: "center",
          open: true,
          Myerror: "Password Didn't Match",
          autoHideDuration: 3000,
        });
      }
      const data = new FormData(event.currentTarget);

      const { user } = await createAutUserEmailAndPassword(
        data.get("email"),
        data.get("password")
      );

      const displayName = data.get("displayName");

      await createUserDocumentfromAuth(user, { displayName });
    } catch (error) {
      switch (error.code) {
        case "auth/weak-password":
          setState({
            vertical: "bottom",
            horizontal: "center",
            open: true,
            Myerror: error.message,
            autoHideDuration: 3000,
          });
          break;
        case "auth/email-already-in-use":
          setState({
            vertical: "bottom",
            horizontal: "center",
            open: true,
            Myerror: error.message,
            autoHideDuration: 3000,
          });
          break;
        default:
          setState({
            vertical: "bottom",
            horizontal: "center",
            open: true,
            Myerror: "Default: Unknown Error from default",
            autoHideDuration: 3000,
          });
          break;
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Snackbar
          open={open}
          autoHideDuration={autoHideDuration}
          anchorOrigin={{ vertical, horizontal }}
        >
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            <AlertTitle>Error</AlertTitle>
            {Myerror}
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
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="displayName"
                  required
                  fullWidth
                  autoFocus
                  type="text"
                  id="displayName"
                  label="Display Name"
                  value={displayName}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  name="email"
                  label="Email Address"
                  autoComplete="email"
                  type="email"
                  value={email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  id="password"
                  label="Password"
                  type="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  id="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  value={confirmPassword}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              noValidate
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
