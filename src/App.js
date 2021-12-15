import React from "react";
import SignInSide from "./Views/Auth";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import RootRoutes from "./Routes/routes";
import history from "./history";

function App() {
  return (
    <Router>
      <RootRoutes />
    </Router>
  );
}

export default App;
