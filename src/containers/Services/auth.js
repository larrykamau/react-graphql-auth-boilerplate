import {
  addObjectToLocalStorageObject,
  addToLocalStorageArray,
  history
} from "utils";
import {} from "utils";

export default class Auth {
  constructor() {
    this.logout = this.logout.bind(this);
    this.storeProfileCred = this.storeProfileCred.bind(this);
    this.storePayloadCred = this.storePayloadCred.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  handleAuthentication(cb) {
    // const hash = process.browser ? window.location.hash : context.asPath;

    this.auth0.parseHash({ hash: window.location.hash }, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.auth0.client.userInfo(authResult.accessToken, (err, profile) => {
          this.storeAuth0Cred(authResult, profile);
          cb(false, { ...authResult, ...profile });
        });
      } else if (err) {
        console.log(err);
        cb(true, err);
      }
    });
  }

  storePayloadCred(data) {
    var payload = data.tokenAuth.payload;
    let extraPayloadData = {
      refreshToken: data.tokenAuth.refreshToken,
      refreshExpiresIn: data.tokenAuth.refreshExpiresIn,
      token: data.tokenAuth.token
    };
    payload = { ...payload, ...extraPayloadData };
    addObjectToLocalStorageObject("kiu_auth_payload", payload);
  }

  storeProfileCred(data) {
    var profile = data.tokenAuth.user;
    delete profile.__typename;
    addObjectToLocalStorageObject("kiu_auth_profile", profile);
  }
  storeRolesCred(data) {
    var roles;
    if (!data.tokenAuth.user.isAdmin) {
      roles = "admin";
    }
    addToLocalStorageArray("kiu_auth_roles", roles);
  }

  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem("kiu_auth_payload");
    localStorage.removeItem("kiu_auth_profile");
    localStorage.removeItem("kiu_auth_roles");
    // navigate to the home route
    history.replace("/");
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(
      localStorage.getItem("scotch_auth_expires_at")
    );
    return new Date().getTime() < expiresAt;
  }

  getProfile() {
    return JSON.parse(localStorage.getItem("kiu_auth_profile"));
  }
}
