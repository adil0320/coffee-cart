import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import CartContext from "../../store/cart-context";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const cartCtx = useContext(CartContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">Adil's Cafe</Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/menu" activeClassName={classes.active}>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" activeClassName={classes.active}>
              Cart
              <span className={classes.CartDisplay}>
                {cartCtx.totalQuantity}
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
