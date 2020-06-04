import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";

// function Routes() {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/app" component={PrivateRoutes} />
//         <Route path="/" render={authentication} />

//         <Route path="*" component={Error404} />
//         {/* <PrivateRoute
//           exact
//           path="/password-change"
//           component={PasswordChange}
//         />
//         <PrivateRoute exact path="/admin" component={Admin} />
//         <PrivateRoute exact path="/profile" component={Profile} />
//         <PrivateRoute exact path="/test" component={FormikContainer} /> */}
//       </Switch>
//     </Router>
//   );
// }
// export default Routes;

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
