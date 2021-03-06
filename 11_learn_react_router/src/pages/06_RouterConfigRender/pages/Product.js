/**
 * Product$ - 路由嵌套实现
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/3/5 5:05 下午
 * @LastEditTime: 2021/3/5 5:05 下午
 */

import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";

function Product(props) {
  return (
    <div>
      <BrowserRouter>
        <NavLink to="/product" exact>
          商品列表
        </NavLink>
        <NavLink to="/product/product-message">商品消息</NavLink>

        {renderRoutes(props.route.routes)}
      </BrowserRouter>
    </div>
  );
}

export default Product;
