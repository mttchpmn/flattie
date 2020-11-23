import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { Layout } from "antd";

import { Header } from "./components/header";
import { Sider } from "./components/sider";
import LoadingSpinner from "./components/loading";

import "./antd.less";
import "./main.scss";
import styles from "./app.module.scss";
import Router from "./components/router/router";

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
        <Layout>
          <Sider />
          <Layout>
            <Content>
              <div className={styles.siteLayoutContent}>
                <Router />
              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

export default App;
