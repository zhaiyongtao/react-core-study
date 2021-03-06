// 使用NavLink 动态传参
import React from "react";
import { renderRoutes } from "react-router-config";
import { BrowserRouter, NavLink } from "react-router-dom";
import routes from "./router";

function RouterConfigRender(props) {
  return (
    <>
      <BrowserRouter>
        <NavLink to="/" exact>
          首页
        </NavLink>

        <NavLink to="/product">商品</NavLink>
        <NavLink to="/user/12">用户</NavLink>
        <NavLink to="/login">登录</NavLink>
        {renderRoutes(routes)}
        {/*<Route path="/" component={Home} />*/}
      </BrowserRouter>
    </>
  );
}

export default RouterConfigRender;
