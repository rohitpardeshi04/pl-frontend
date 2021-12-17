import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Login from "../Views/Auth/Login";
import Register from "../Views/Auth/Register";

const AuthRoutes = () => {
  const { path } = useRouteMatch();
  console.log(path);
  return (
    <>
      <Switch>
        <Route exact path={`${path}`}>
          <Login />
        </Route>
        <Route exact path={`${path}/register`}>
          <Register />
        </Route>
      </Switch>
    </>
  );
};

export default AuthRoutes;
