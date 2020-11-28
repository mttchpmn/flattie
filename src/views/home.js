import React, { useContext } from "react";
import { Link } from "react-router-dom/";
import { useAuth0 } from "@auth0/auth0-react";

import { Button, Typography, Layout } from "antd";

import { MainLayout } from "../layouts";
import { LandingPage } from "../components/landing-page/";
import { FlatContext } from "../context/flat-context";
import { deleteFlat } from "../modules/api/flat";
import FlatDetails from "../components/dashboard/flat-details";
import NoCurrentFlat from "../components/dashboard/no-current-flat";
import { UserContext } from "../context/user-context";

const { Content } = Layout;
const { Title, Text } = Typography;

const Home = () => {
  const { isAuthenticated, user } = useAuth0();
  const { flatData } = useContext(FlatContext);
  const userProfile = useContext(UserContext);

  if (!isAuthenticated) return <LandingPage />;

  return (
    <MainLayout>
      <Button onClick={deleteFlat}>Delete Flat</Button>
      {flatData?.id ? <FlatDetails /> : <NoCurrentFlat />}
      <br />
      <p>Flat Context:</p>
      <pre>{JSON.stringify(flatData, null, 4)}</pre>
      <p>ID token:</p>
      <pre>{JSON.stringify(user, null, 4)}</pre>
      <hr />
      <p>User Profile:</p>
      <pre>{JSON.stringify(userProfile, null, 4)}</pre>
    </MainLayout>
  );
};

export default Home;
