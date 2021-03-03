/**
 * NavLinkRouter$ - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/3/3 4:16 下午
 * @LastEditTime: 2021/3/3 4:16 下午
 */

import React, { PureComponent } from "react";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import ProFile from "./components/ProFile";
import User from "./components/User";
import "./NavLinkRouter.css";

class NavLinkRouter extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <NavLink to="/" activeStyle={{ color: "green" }}>
          Home
        </NavLink>
        <NavLink activeClassName="nav-link-title" to="/about">
          About
        </NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/profile" component={ProFile} />
        <Route path="/:userId" component={User} />
      </BrowserRouter>
    );
  }
}

export default NavLinkRouter;
