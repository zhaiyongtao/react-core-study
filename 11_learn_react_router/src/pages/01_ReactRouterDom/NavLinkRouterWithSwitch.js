/**
 * NavLinkRouter$ - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/3/3 4:16 下午
 * @LastEditTime: 2021/3/3 4:16 下午
 */

import React, { PureComponent } from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import ProFile from "./components/ProFile";
import User from "./components/User";
import "./NavLinkRouter.css";
import NoMatch from "./components/NoMatch";

class NavLinkRouterWithSwitch extends PureComponent {
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

        <Switch>
          {/*Home NoMatch*/}
          <Route path="/" exact component={Home} />
          {/*About User NoMatch*/}
          <Route path="/about" component={About} />
          {/*ProFile User NoMatch*/}
          <Route path="/profile" component={ProFile} />
          <Route path="/:userId" component={User} />
          <Route component={NoMatch} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default NavLinkRouterWithSwitch;
