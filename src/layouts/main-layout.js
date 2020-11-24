import React from "react";

import { Layout } from "antd";

import { Header } from "../components/header";
import { Sider } from "../components/sider";
import styles from "./main-layout.module.scss";

const { Content } = Layout;

const MainLayout = ({ children }) => (
  <Layout>
    <Header />
    <Layout>
      <Sider />
      <Layout>
        <Content>
          <div className={styles.siteLayoutContent}>{children}</div>
        </Content>
      </Layout>
    </Layout>
  </Layout>
);

export default MainLayout;
