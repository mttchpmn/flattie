import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getFlat } from "../modules/api/flat";

export const FlatContext = React.createContext();

export const FlatContextWrapper = ({ children }) => {
  const { isAuthenticated, user } = useAuth0();
  const [flatData, setFlatData] = useState({});

  useEffect(() => {
    if (isAuthenticated) {
      const userId = user.sub;
      const flatId = "foo"; // TODO - Need to fetch this from user profile
      getFlat(flatId).then((data) => setFlatData(data));
    }
  }, [isAuthenticated, user]);

  const ctx = { flatData, setFlatData };

  return <FlatContext.Provider value={ctx}>{children}</FlatContext.Provider>;
};
