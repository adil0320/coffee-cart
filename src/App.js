import React from "react";

import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import CartPage from "./pages/Cart";
import MenuPage from "./pages/Menu";

const App = () => {
  return (
    <Layout>
      <Switch>
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
