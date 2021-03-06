// 使用NavLink 动态传参
import React from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import User from "./Components/User";

function StateAndSearchParamsRouter(props) {
  return (
    <>
      <BrowserRouter>
        <NavLink to="/" exact>
          登录
        </NavLink>
        <NavLink to="/home?name=zyt&age=18">首页</NavLink>
        <NavLink to="/user/12">用户</NavLink>

        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/user/:userId" component={User} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default StateAndSearchParamsRouter;
