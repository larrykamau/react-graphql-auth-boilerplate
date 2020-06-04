import React, { useState } from "react";
import "../styles.css";
import Routes from "./routes";
import { AuthContext } from "./AppContext";

function App() {
  const existingToken = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingToken);
  const [profile, setProfile] = useState({});

  const setTokens = data => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };
  const setUserProfile = data => {
    setProfile(data);
  };
  return (
    <AuthContext.Provider
      value={{
        authTokens,
        profile,
        setUserProfile: setProfile,
        setAuthTokens: setTokens
      }}
    >
      <div className="App">
        <Routes />
      </div>
    </AuthContext.Provider>
  );
}
export default App;
