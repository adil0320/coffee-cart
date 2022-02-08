import React from "react";
import { NavLink, Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/menu">Adil's Cafe</Link>
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
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
