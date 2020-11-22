import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { Home } from "./views";
import "./app.scss";
import NavBar from "./components/nav/navbar";
// import { NavBar, Footer, Loading } from "./components";
// import ProtectedRoute from "./auth/protected-route";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    // return <Loading />;
    return <div>Loading...</div>;
  }

  return (
    <div id="app" className="app">
      <NavBar />
      <div className="app-container">
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
