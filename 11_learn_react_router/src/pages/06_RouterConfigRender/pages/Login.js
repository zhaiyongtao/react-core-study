/**
 * Login$ - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/3/5 4:27 下午
 * @LastEditTime: 2021/3/5 4:27 下午
 */
import React from "react";
import { withRouter } from "react-router";

function Login(props) {
  const loginBtnFn = () => {
    const { history } = props;
    history.push("/", {
      name: "zyt",
      from: "login",
    });
  };
  return (
    <div>
      login
      <button onClick={() => loginBtnFn()}>登录</button>
    </div>
  );
}

// 通过withRouter装饰器 （高阶组件） 将props透传到子组件中
export default withRouter(Login);
