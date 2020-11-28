import React, { useContext } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { useAuth0 } from "@auth0/auth0-react";

import { Layout } from "antd";

import { MainLayout } from "../layouts";
import { LandingPage } from "../components/landing-page/";
import { FlatContext } from "../context/flat-context";
import { CreateFlatForm } from "../components/create-flat-form/";

const { Content } = Layout;

const CreateFlat = () => {
  const { isAuthenticated } = useAuth0();
  const { flatData } = useContext(FlatContext);

  if (!isAuthenticated) return <LandingPage />;
  if (flatData.id) return <Redirect to="/" />;

  return (
    <MainLayout>
      <Content style={{ background: "#fff", padding: "2rem" }}>
        <h2>Create Flat</h2>

        <CreateFlatForm onSuccessRedirect="/" />
      </Content>
    </MainLayout>
  );
};

export default CreateFlat;
