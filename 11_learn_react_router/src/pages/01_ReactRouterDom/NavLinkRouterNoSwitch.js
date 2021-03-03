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
import NoMatch from "./components/NoMatch";

class NavLinkRouterNoSwitch extends PureComponent {
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

        {/*/about路径匹配到的同时，/:userid也被匹配到了，并且最后的一个NoMatch组件总是被匹配到；*/}
        {/*  react-router中只要是路径被匹配到的Route对应的组件都会被渲染；*/}
        {/*Home NoMatch*/}
        <Route path="/" exact component={Home} />
        {/*About User NoMatch*/}
        <Route path="/about" component={About} />
        {/*ProFile User NoMatch*/}
        <Route path="/profile" component={ProFile} />
        {/*/:userId 属于动态路由，/ 后面是不确定的， 所以可以被其他路由匹配到 */}
        <Route path="/:userId" component={User} />
        <Route component={NoMatch} />
      </BrowserRouter>
    );
  }
}

export default NavLinkRouterNoSwitch;
