import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../../views/home";
import Profile from "../../views/profile";
import ProtectedRoute from "./protected-route";

const Router = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <ProtectedRoute path="/profile" component={Profile} />
  </Switch>
);

export default Router;
