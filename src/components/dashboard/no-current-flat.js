import React from "react";
import { Link } from "react-router-dom";

import { Button, Typography } from "antd";

const { Title, Text } = Typography;

const NoCurrentFlat = () => {
  return (
    <div style={{ background: "#fff", padding: "2rem" }}>
      <div>
        <Title>No Current Flat</Title>
        <Text>
          You do not currently have a flat. Click the button below to create a
          new one!
        </Text>
      </div>
      <Button type="primary">
        <Link to="/create-flat">Create New Flat</Link>
      </Button>
    </div>
  );
};

export default NoCurrentFlat;
