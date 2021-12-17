import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Auth from "../Views/Auth";
import Login from "../Views/Auth/Login";
import Register from "../Views/Auth/Register";
import SearchPage from "../Views/Search";
import ProtectedRoute from "./ProtectedRoute";

const Routes = () => {
  return (
    <>
      {/* In react-router-dom v6, "Switch" is replaced by routes "Routes".  */}

      <Switch>
        <Route exact path="/">
          <Redirect to="/auth" />
        </Route>
        <Route path="/auth" component={Auth} />

        {/* <Route path="/dashboard" component={SearchPage} /> */}

        <ProtectedRoute path="/dashboard" component={DashboardLayout} />
      </Switch>
    </>
  );
};

export default Routes;
