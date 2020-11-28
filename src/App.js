import React from "react";
import { Switch, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import LoadingSpinner from "./components/loading";
import { ProtectedRoute } from "./components/auth";

import Home from "./views/home";
import Profile from "./views/profile";
import Board from "./views/board";

import "./antd.less";
import "./main.scss";
import styles from "./app.module.scss";
import CreateFlat from "./views/create-flat";
import { FlatContextWrapper } from "./context/flat-context";
import { UserProvider } from "./context/user-context";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div id="app" className={styles.appContainer}>
      <UserProvider>
        <FlatContextWrapper>
          <Switch>
            <Route path="/" exact component={Home} />
            <ProtectedRoute path="/create-flat" component={CreateFlat} />
            <ProtectedRoute path="/profile" component={Profile} />
            <ProtectedRoute path="/board" component={Board} />
          </Switch>
        </FlatContextWrapper>
      </UserProvider>
    </div>
  );
};

export default App;
