import React, { Fragment, useEffect, useState } from "react";
import { Switch, useHistory, useRouteMatch } from "react-router-dom";
import { uniqBy } from "lodash";
import { rolesConfig } from "config/roles";
import * as Routes from "./RoutesConfig";
import Navigation from "../../components/Navigation";
import PrivateRoute from "./PrivateRoute";

function PrivateRoutes() {
  const history = useHistory();
  const match = useRouteMatch();
  const [allowedRoutes, setAllowedRoutes] = useState([]);
  let roles = JSON.parse(localStorage.getItem("kiu_auth_roles"));
  if (!roles) {
    history.push("/login");
  }

  useEffect(() => {
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
      setAllowedRoutes(allowedRoutes);
      console.log("allowed routes", allowedRoutes);
    }
  }, []);
  return (
    <Fragment>
      <Navigation routes={allowedRoutes} path={match.path} />
      <Switch>
        {allowedRoutes.map(route => (
          <PrivateRoute
            exact
            key={route.url}
            component={Routes[route.component]}
            path={`${match.path}${route.url}`}
          />
        ))}
      </Switch>
    </Fragment>
  );
}
export default PrivateRoutes;
