import React, { useState } from "react";

// TODO - Fetch Flat Data from API

export const FlatContext = React.createContext();

console.log("FETCHING FROM API...");

export const FlatContextWrapper = ({ children }) => {
  const [flatData, setFlatData] = useState({});
  const ctx = { flatData, setFlatData };

  return <FlatContext.Provider value={ctx}>{children}</FlatContext.Provider>;
};
