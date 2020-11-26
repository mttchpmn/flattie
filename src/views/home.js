import { useAuth0 } from "@auth0/auth0-react";
import React, { useContext } from "react";
import { MainLayout } from "../layouts";
import { LandingPage } from "../components/landing-page/";
import { FlatContext } from "../components/context/flat-context";
import { Button } from "antd";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Home = () => {
  const { isAuthenticated } = useAuth0();
  const { flatData } = useContext(FlatContext);

  if (!isAuthenticated) return <LandingPage />;

  return (
    <MainLayout>
      <p>Welcome to Flattie...</p>
      <p>You are logged in</p>
      <br />

      {flatData.id ? (
        <div>
          <p>Your Flat:</p>
          <pre>{JSON.stringify(flatData)}</pre>
        </div>
      ) : (
        <div>
          <p>No current flat :(</p>
          <Button>
            <Link to="create-flat">Create New Flat</Link>
          </Button>
        </div>
      )}
    </MainLayout>
  );
};

export default Home;
