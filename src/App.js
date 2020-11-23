import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { Layout } from "antd";

import { Home } from "./views";
import { Header } from "./components/header";

import "./main.scss";
import styles from "./app.module.scss";
// import { NavBar, Footer, Loading } from "./components";
// import ProtectedRoute from "./auth/protected-route";
const { Content } = Layout;

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    // return <Loading />;
    return <div>Loading...</div>;
  }

  return (
    <div id="app" className="app">
      <Header />
      <div className="app-container">
        <Content>
          <div className="site-layout-content">
            <Switch>
              <Route path="/" exact component={Home} />
            </Switch>
          </div>
        </Content>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
