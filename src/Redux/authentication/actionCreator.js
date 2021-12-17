import actions from "./actions";
import axios from "axios";

const {
  registerBegin,
  registerSuccess,
  registerErr,
  loginBegin,
  loginSuccess,
  loadUser,
  loginErr,
  logoutBegin,
  logoutErr,
  logoutSuccess,
} = actions;

const register = (formData) => {
  return async (dispatch) => {
    try {
      dispatch(registerBegin());
      //const result = await axios.post("http://localhost:5000/user/signin", formData)
      const { data } = await axios.post(
        process.env.REACT_APP_BASE + "/auth/register",
        formData
      );
      if (data.user) {
        localStorage.setItem("access_token", data.tokens.access.token);
        localStorage.setItem("refresh_token", data.tokens.refresh.token);
        localStorage.setItem("user", data.user.id);

        dispatch(registerSuccess(true));
        dispatch(loadUser(data));
        // history.push(`/dashboard/search`);
        // dispatch(loginSuccess(true));
      }
    } catch (err) {
      console.log(err.response);
      // dispatch(
      //   openSnackbar(
      //     err.response
      //       ? err.response.data.response
      //       : "Error! Please try again.",
      //     "error"
      //   )
      // );
      dispatch(registerErr(err));
    }
  };
};

const login = (formData) => {
  return async (dispatch) => {
    try {
      dispatch(loginBegin());

      const { data } = await axios.post(
        process.env.REACT_APP_BASE + "/auth/login",
        formData
      );
      console.log(data);
      if (data.user) {
        localStorage.setItem("access_token", data.tokens.access.token);
        localStorage.setItem("refresh_token", data.tokens.refresh.token);
        localStorage.setItem("user", data.user.id);

        await dispatch(loginSuccess(true));
        await dispatch(loadUser(data.user));
        // history.push("/dashboard");
        console.log("Hii");
      }
    } catch (err) {
      console.log(err);
      // if (err)
      //   dispatch(
      //     openSnackbar(
      //       err.response
      //         ? err.response.data.response.message
      //         : "Error! Please try again.",
      //       "error"
      //     )
      //   );
      dispatch(loginErr(err));
    }
  };
};

const logOut = () => {
  return async (dispatch) => {
    try {
      dispatch(logoutBegin());
      const refresh = localStorage.getItem("refresh_token");
      const response = await axios.post(
        process.env.REACT_APP_BASE + "/auth/logout",
        { refreshToken: refresh }
      );
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("user");
      dispatch(logoutSuccess(false));
    } catch (err) {
      console.log(err);
      dispatch(logoutErr(err));
    }
  };
};

export { register, login, logOut };
