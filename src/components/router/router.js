import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../../views/home";

const Router = () => (
  <Switch>
    <Route path="/" exact component={Home} />
  </Switch>
);

export default Router;
