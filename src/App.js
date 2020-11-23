import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { Layout } from "antd";

import { Home } from "./views";
import { Header } from "./components/header";

import "./antd.less";
import "./main.scss";
import styles from "./app.module.scss";
import LoadingSpinner from "./components/loading";

// import { NavBar, Footer, Loading } from "./components";
// import ProtectedRoute from "./auth/protected-route";
const { Content } = Layout;

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div id="app" className={styles.appContainer}>
      <Layout>
        <Header />
        <Content>
          <div className={styles.siteLayoutContent}>
            <Switch>
              <Route path="/" exact component={Home} />
            </Switch>
          </div>
        </Content>
      </Layout>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
