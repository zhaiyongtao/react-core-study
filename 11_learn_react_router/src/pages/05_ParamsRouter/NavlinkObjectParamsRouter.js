// 使用NavLink 动态传参
import React from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import User from "./Components/User";
import About from "./Components/About";

function NavlinkObjectParamsRouter(props) {
  return (
    <>
      <BrowserRouter>
        <NavLink to="/" exact>
          登录
        </NavLink>
        <NavLink to="/home">首页</NavLink>
        <NavLink to="/user/12">用户</NavLink>
        <NavLink
          to={{
            pathname: "/about",
            query: { name: "kobe", age: 30 },
            state: { height: 1.98, address: "洛杉矶" },
            search: "?apikey=123",
          }}
        >
          关于
        </NavLink>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/user/:userId" component={User} />
          <Route path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default NavlinkObjectParamsRouter;
