import actions from "./actions";
import jwt_decode from "jwt-decode";

const {
  REGISTER_BEGIN,
  REGISTER_SUCCESS,
  REGISTER_ERR,
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  SET_STORE,
  LOAD_USER,
  LOGIN_ERR,
  LOGOUT_BEGIN,
  LOGOUT_SUCCESS,
  LOGOUT_ERR,
} = actions;

let token = localStorage.getItem("access_token");
if (token) var decoded = jwt_decode(token);

const initState = {
  user: null,
  isAuth: false,
  loading: false,
  error: null,
};

const AuthReducer = (state = initState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case LOGIN_BEGIN:
    case REGISTER_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuth: data,
        loading: false,
      };

    case LOGIN_ERR:
    case REGISTER_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    case LOGOUT_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuth: data,
        loading: false,
      };
    case LOGOUT_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    case LOAD_USER:
      return {
        ...state,
        user: data,
      };
    default:
      return state;
  }
};
export default AuthReducer;
