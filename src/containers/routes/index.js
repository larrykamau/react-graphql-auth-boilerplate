import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";

const authentication = () =>
  JSON.parse(localStorage.getItem("kiu_auth_roles")) ? (
    <Redirect to="/app" />
  ) : (
    <PublicRoutes />
  );

class Routes extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/app" component={PrivateRoutes} />
            <Route path="" render={authentication} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Routes;
