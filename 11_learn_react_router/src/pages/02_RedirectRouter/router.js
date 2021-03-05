// Redirect 的使用
import React from "react";
import { NavLink, Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import RedirectAuth from "./components/RedirectAuth";
import Login from "./components/Login";

function Router(props) {
  return (
    <>
      <BrowserRouter>
        <NavLink to="/">首页</NavLink>
        <NavLink to="/about"> 关于</NavLink>
        <NavLink to="/user">用户</NavLink>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/user" component={RedirectAuth} />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Router;
