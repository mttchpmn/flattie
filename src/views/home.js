import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { MainLayout } from "../layouts";
import { LandingPage } from "../components/landing-page/";

const Home = () => {
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) return <LandingPage />;

  return (
    <MainLayout>
      <p>Welcome to Flattie...</p>
      <p>You are logged in</p>
    </MainLayout>
  );
};

export default Home;
