/**
 * Product$ - 路由嵌套实现
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/3/5 5:05 下午
 * @LastEditTime: 2021/3/5 5:05 下午
 */

import React from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import ProductList from "./ProductList";
import ProductMessage from "./ProductMessage";

function Product(props) {
  return (
    <div>
      <BrowserRouter>
        <NavLink to="/product" exact>
          商品列表
        </NavLink>
        <NavLink to="/product/product-message">商品消息</NavLink>

        <Switch>
          {/*这个地方的path 名称和父级路由相同是为了让他进入父级路由的时候有默认显示的内容*/}
          <Route path="/product" exact component={ProductList} />
          <Route
            path="/product/product-message"
            exact
            component={ProductMessage}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Product;
