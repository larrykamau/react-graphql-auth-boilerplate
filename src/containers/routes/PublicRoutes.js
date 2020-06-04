import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "../LandingPage";
import Error404 from "../error404";
import Login from "../auth/Login";
import Signup from "../auth/Signup";
import EmailActivation from "../auth/emailActivation";
import EmailVerification from "../auth/emailVerification";
import PasswordReset from "../auth/passwordReset";
import PasswordResetEmail from "../auth/passwordResetEmail";

const PublicRoutes = ({ match }) => (
  <Fragment>
    <Switch>
      <Route exact path={`/`} component={LandingPage} />
      <Route exact path={`/activate`} component={EmailVerification} />
      <Route exact path={`/activate/:emailToken`} component={EmailActivation} />
      <Route exact path={`/login`} component={Login} />
      <Route exact path={`/signup`} component={Signup} />
      <Route exact path={`/password-reset`} component={PasswordResetEmail} />
      <Route
        exact
        path={`/password-reset/:resetToken`}
        component={PasswordReset}
      />
      <Route component={Error404} />
    </Switch>
  </Fragment>
);

export default PublicRoutes;
