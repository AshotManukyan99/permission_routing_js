import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "../components/Header";
import { RedirectHandler } from "../components/RedirectHandler";
import { Home } from "./Home";
import { Manager } from "./Manager";
import { Admin } from "./Admin";
import { AdminManager } from "./AdminManager";

export const AppRouter = () => {
  return (
    <Router>
      <RedirectHandler>
        <Header />

        <Switch>
          <Route path="/manager" component={Manager} />
          <Route path="/admin" component={Admin} />
          <Route path="/admin-manager" component={AdminManager} />
          <Route path="/" component={Home} />
        </Switch>
      </RedirectHandler>
    </Router>
  );
};
