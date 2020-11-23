import { Layout } from "antd";
import React from "react";

const { Header: AntHeader } = Layout;

const Header = () => {
  return (
    <AntHeader>
      <div className="logo">Flattie</div>
    </AntHeader>
  );
};

export default Header;
