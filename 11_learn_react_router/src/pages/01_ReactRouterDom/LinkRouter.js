/**
 * router.js$ - 路由的基本应用 Link Route
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/3/3 3:33 下午
 * @LastEditTime: 2021/3/3 3:33 下午
 */
import React, { PureComponent } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import ProFile from "./components/ProFile";

class LinkRouter extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">ProFile</Link>

        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/profile" component={ProFile} />
      </BrowserRouter>
    );
  }
}

export default LinkRouter;
