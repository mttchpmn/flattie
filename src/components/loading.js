import React from "react";

import { Spin } from "antd";

const LoadingSpinner = () => (
  <div
    style={{
      textAlign: "center",
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignContent: "center",
      justifyContent: "center",
    }}
  >
    <Spin size="large" />
  </div>
);

export default LoadingSpinner;
