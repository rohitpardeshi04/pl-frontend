import { Avatar, Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link } from "react-router-dom";
import axios from "axios";
import { register } from "../../Redux/authentication/actionCreator";
import { useDispatch } from "react-redux";

const Register = () => {
  const dispatch = useDispatch();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    dispatch(
      register({
        name: data.get("name"),
        email: data.get("email"),
        password: data.get("password"),
        businessName: data.get("businessName"),
        phoneNumber: data.get("phoneNumber"),
      })
    );
  };
  return (
    <>
      <Avatar sx={{ m: 1, bgcolor: "orange" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Register
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Full Name"
          name="name"
          autoComplete="name"
          autoFocus
        />

        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
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
        <TextField
          margin="normal"
          required
          fullWidth
          id="business"
          label="Business Title"
          name="businessName"
          autoComplete="businessName"
        />
        <TextField
          margin="normal"
          required
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          fullWidth
          id="phoneNumber"
          label="Phone Number"
          name="phoneNumber"
          autoComplete="phoneNumber"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 5, mb: 2 }}
        >
          Register
        </Button>
        <Grid container>
          <Grid item xs></Grid>
          <Grid item>
            <Link to="/" variant="body2">
              {"Already have an account? Login here"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Register;
