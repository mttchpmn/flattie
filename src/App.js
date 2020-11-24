import React from "react";
import { Switch, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import LoadingSpinner from "./components/loading";
import { ProtectedRoute } from "./components/auth";

import Home from "./views/home";
import Profile from "./views/profile";

import "./antd.less";
import "./main.scss";
import styles from "./app.module.scss";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div id="app" className={styles.appContainer}>
      <Switch>
        <Route path="/" exact component={Home} />
        <ProtectedRoute path="/profile" component={Profile} />
      </Switch>
    </div>
  );
};

export default App;
