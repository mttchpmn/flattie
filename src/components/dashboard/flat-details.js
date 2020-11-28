import React, { useContext } from "react";
import { FlatContext } from "../../context/flat-context";

import { Typography } from "antd";

const { Title, Text } = Typography;

const FlatDetails = () => {
  const { flatData } = useContext(FlatContext);

  return (
    <div style={{ background: "#fff", padding: "2rem" }}>
      <Title>{flatData.flatName}</Title>
      <Text>{flatData.flatAddress}</Text>
    </div>
  );
};

export default FlatDetails;
