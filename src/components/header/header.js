import { Layout } from "antd";
import React from "react";

import { AuthenticationButton } from "../auth";

import logo from "../branding/flattie_logo_full.png";
import styles from "./header.module.scss";

const { Header: AntHeader } = Layout;

const Header = () => {
  return (
    <AntHeader>
      <img className={styles.logo} src={logo} alt="Flattie Logo" />
      <span className={styles.authButton}>
        <AuthenticationButton />
      </span>
    </AntHeader>
  );
};

export default Header;
