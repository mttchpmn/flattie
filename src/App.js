import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { Divider, Layout, Menu } from "antd";
import {
  HomeOutlined,
  AppstoreAddOutlined,
  UserOutlined,
  TeamOutlined,
} from "@ant-design/icons";

import { Home } from "./views";
import { Header } from "./components/header";
import LoadingSpinner from "./components/loading";

import "./antd.less";
import "./main.scss";
import styles from "./app.module.scss";

// import { NavBar, Footer, Loading } from "./components";
// import ProtectedRoute from "./auth/protected-route";
const { Content, Sider } = Layout;

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
          <Sider width={200} className={styles.siteLayoutBackground}>
            <Menu>
              <Menu.Item key="profile">
                <UserOutlined />
                <Link to="/profile">Profile</Link>
              </Menu.Item>
              <Divider />
              <Menu.Item key="home">
                <HomeOutlined />
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="flatmates">
                <TeamOutlined />
                <Link to="/flatmates">Flatmates</Link>
              </Menu.Item>
              <Menu.Item key="board">
                <AppstoreAddOutlined />
                <Link to="/board">Flat Board</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content>
              <div className={styles.siteLayoutContent}>
                <Switch>
                  <Route path="/" exact component={Home} />
                </Switch>
              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
