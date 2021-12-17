import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./auth.css";
import Login from "./Login";
import AuthRoutes from "../../Routes/AuthRoutes";
import { useSelector } from "react-redux";

const theme = createTheme();

const Auth = (props) => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  React.useEffect(() => {
    if (isAuth) props.history.push("/dashboard");
  }, [isAuth]);

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          //   sx={{
          //     backgroundImage: "url(/assets/auth.svg)",
          //     backgroundRepeat: "no-repeat",
          //     backgroundColor: (t) =>
          //       t.palette.mode === "light"
          //         ? t.palette.grey[50]
          //         : t.palette.grey[900],
          //     backgroundSize: "cover",
          //     backgroundPosition: "center",
          //   }}
        >
          <img className="authImg" src="/assets/auth.svg" />
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 20,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "0 15%",
            }}
          >
            <AuthRoutes />
            {/* <Login /> */}
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Auth;
