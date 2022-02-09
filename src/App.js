import React from "react";

import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import CartPage from "./pages/Cart";
import MenuPage from "./pages/Menu";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/menu" />
        </Route>
        <Route path="/menu">
          <MenuPage />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
