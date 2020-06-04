import React from "react";
import ReactDOM from "react-dom";

import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";

// 1
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const getToken = () => {
  const pureJSON = localStorage.getItem("kiu_auth_access_token");
  const accessToken = JSON.parse(localStorage.getItem(pureJSON));
  if (accessToken === null || accessToken === undefined) {
    return false;
  } else {
    return true;
  }
};

// 2
const httpLink = createHttpLink({
  // headers: !getToken()    ? ""    : { authorization: localStorage.getItem("kiu_auth_access_token") },
  uri:
    process.env.REACT_APP_APOLLO_URL ||
    "https://kiu-delivery-backend.herokuapp.com/graphql/",
  request: async operation => {
    // Get JWT token from local storage
    const token = !getToken()
      ? ""
      : localStorage.getItem("kiu_auth_access_token");

    // Pass token to headers
    operation.setContext({
      headers: {
        Authorization: token ? `Bearer ${token}` : ""
      }
    });
  }
});

// 3
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

// 4
const rootElement = document.getElementById("root");
ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  rootElement
);
serviceWorker.register();
