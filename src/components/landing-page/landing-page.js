import React from "react";

import { Layout, Typography, Space } from "antd";

import { Header } from "../header";
import styles from "./landing-page.module.scss";
import logo from "../branding/flattie_logo_logomark.png";
import { LoginButton, SignupButton } from "../auth";

const { Content, Footer } = Layout;
const { Title, Text } = Typography;

const LandingPage = () => (
  <Layout>
    <Header />
    <Layout>
      <Content>
        <div className={styles.contentContainer}>
          <div className={styles.brandContainer}>
            <div className={styles.logoContainer}>
              <img className={styles.logo} src={logo} alt="Flattie logo" />
            </div>
            <div className={styles.textContainer}>
              <Title>FLATTIE.</Title>
              <Text>Housesharing made simple.</Text>
            </div>
            <div className={styles.authContainer}>
              <Space>
                <SignupButton />
                <LoginButton />
              </Space>
            </div>
          </div>
        </div>
      </Content>
    </Layout>
    <Footer className={styles.footer}>
      <div className={styles.footerText}>Flattie Web 2020</div>
    </Footer>
  </Layout>
);

export default LandingPage;
