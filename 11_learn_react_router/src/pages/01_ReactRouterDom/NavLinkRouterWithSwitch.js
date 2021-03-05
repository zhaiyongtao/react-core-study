/**
 * NavLinkRouter$ - Switch的使用
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
        {/*<Switch>是唯一的因为它仅仅只会渲染一个路径。相比之下（不使用<Switch>包裹的情况下），每一个被location匹配到的<Route>将都会被渲染*/}
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
