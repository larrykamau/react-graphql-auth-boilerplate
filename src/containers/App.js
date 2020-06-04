import React from "react";
import "../styles.css";
import Routes from "./routes";
import { AuthContext } from "./AppContext";

function App() {
  return (
    <AuthContext.Provider value={{}}>
      <div className="App">
        <Routes />
      </div>
    </AuthContext.Provider>
  );
}
export default App;
