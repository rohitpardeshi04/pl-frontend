import { Avatar, Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link, useRouteMatch } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/authentication/actionCreator";

const Login = () => {
  const dispatch = useDispatch();
  const { path } = useRouteMatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data);
    dispatch(
      login({
        email: data.get("email"),
        password: data.get("password"),
      })
    );
    // console.log(response);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <>
      <Avatar sx={{ m: 1, bgcolor: "orange" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
        {/* <Link to="/dashboard"> */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 5, mb: 2 }}
        >
          Login
        </Button>
        {/* </Link> */}
        <Grid container>
          <Grid item xs>
            <Link to="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link to={`${path}/register`} variant="body2">
              {"Don't have an account? Register here"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Login;
