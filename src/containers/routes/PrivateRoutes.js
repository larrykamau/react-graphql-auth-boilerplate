import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import { uniqBy } from "lodash";
import { rolesConfig } from "config/roles";
import * as Routes from "./PubRoutes";
import Navigation from "../../components/Navigation";
import PrivateRoute from "./PrivateRoute";

class PrivateRoutes extends Component {
  state = { allowedRoutes: [] };

  componentDidMount() {
    /*
      TODO: Replace hardcoded roles with redux,
       localStorage, or get from server.
     */
    let roles = JSON.parse(localStorage.getItem("kiu_auth_roles"));
    if (roles) {
      roles = ["common", ...roles];

      let allowedRoutes = roles.reduce((acc, role) => {
        return [...acc, ...rolesConfig[role].routes];
      }, []);

      // For removing duplicate entries, compare with 'url'.
      allowedRoutes = uniqBy(allowedRoutes, "url");
      this.setState({ allowedRoutes });
    } else {
      this.props.history.push("/login");
    }
  }

  render() {
    return (
      <Fragment>
        <Navigation
          routes={this.state.allowedRoutes}
          path={this.props.match.path}
        />
        <Switch>
          {this.state.allowedRoutes.map(route => (
            <PrivateRoute
              exact
              key={route.url}
              component={Routes[route.component]}
              path={`${this.props.match.path}${route.url}`}
            />
          ))}
        </Switch>
      </Fragment>
    );
  }
}

export default PrivateRoutes;
