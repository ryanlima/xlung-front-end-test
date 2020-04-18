import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import GroupsList from "./pages/GroupsList";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/list" component={GroupsList} />
      <Route path="*" component={Home} />
    </Switch>
  );
};

export default Routes;
