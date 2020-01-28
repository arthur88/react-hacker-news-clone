import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import News from "./News";

const Main = () => (
  <div>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/news" component={News} />
  </Switch>
  </div>
  
);

export default Main;