/**
 * NestedRouter$ - 嵌套路由的应用
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/3/5 4:47 下午
 * @LastEditTime: 2021/3/5 4:47 下午
 */

import React from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import User from "./Components/User";
import Product from "./Components/Product";

function NestedRouter(props) {
  return (
    <div>
      <BrowserRouter>
        <NavLink to="/" exact>
          首页
        </NavLink>
        <NavLink to="/product"> 商品</NavLink>
        <NavLink to="/user">用户</NavLink>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product" exact component={Product} />
          <Route path="/user" exact component={User} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default NestedRouter;
