import { useAuth0 } from "@auth0/auth0-react";
import React, { Fragment } from "react";

const Home = () => {
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) return <div>Fuck you</div>;

  return (
    <Fragment>
      <p>Welcome to Flattie...</p>
      <p>You are logged in</p>
    </Fragment>
  );
};

export default Home;
