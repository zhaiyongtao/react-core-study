// 使用history的push方法进行传参
import React from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import User from "./Components/User";

function HistoryRouter(props) {
  return (
    <>
      <BrowserRouter>
        <NavLink to="/" exact>
          登录
        </NavLink>
        <NavLink to="/home">首页</NavLink>
        <NavLink to="/user">用户</NavLink>

        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/user" component={User} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default HistoryRouter;
