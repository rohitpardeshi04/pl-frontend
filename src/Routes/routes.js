import React from "react";
import { Route, Switch } from "react-router-dom";
import SignInSide from "../Views/Auth";
import Login from "../Views/Auth/Login";
import Register from "../Views/Auth/Register";
import SearchPage from "../Views/Search";
import ProtectedRoute from "./ProtectedRoute";

const RootRoutes = () => {
  return (
    <>
      {/* In react-router-dom v6, "Switch" is replaced by routes "Routes".  */}

      <Switch>
        <Route exact path="/">
          <SignInSide />
        </Route>
        <Route path="/dashboard">
          <SearchPage />
        </Route>
        {/* <ProtectedRoute path="/dashboard" component={SearchPage} /> */}
      </Switch>
    </>
  );
};

export default RootRoutes;
