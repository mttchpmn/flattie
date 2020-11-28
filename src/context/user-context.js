import { useState, createContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getUserById } from "../modules/auth/auth0-api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { isAuthenticated, user: idToken } = useAuth0();
  const [user, setUser] = useState({});

  if (isAuthenticated) {
    const userId = idToken.sub;
    getUserById(userId).then((userProfile) => setUser(userProfile));
  }

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
