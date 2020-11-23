import React from "react";
import { Link } from "react-router-dom";

import { Divider, Layout, Menu } from "antd";
import {
  HomeOutlined,
  AppstoreAddOutlined,
  UserOutlined,
  TeamOutlined,
} from "@ant-design/icons";

const { Sider: AntSider } = Layout;

const Sider = () => {
  return (
    <AntSider width={200} style={{ background: "#fff" }}>
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
    </AntSider>
  );
};

export default Sider;
