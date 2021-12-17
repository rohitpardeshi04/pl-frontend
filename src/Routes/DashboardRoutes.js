import React from "react";
import { Route, Switch, Redirect, useRouteMatch } from "react-router-dom";
import SearchPage from "../Views/Search";

const DashboardRoutes = () => {
  const { path } = useRouteMatch();
  console.log(path);
  return (
    <>
      <Switch>
        <Route exact path={`${path}`}>
          <Redirect to={`${path}/search`} />
        </Route>
        <Route exact path={`${path}/search`}>
          <SearchPage />
        </Route>
      </Switch>
    </>
  );
};

export default DashboardRoutes;
