/**
 * RedirectAuth$ - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/3/5 4:17 下午
 * @LastEditTime: 2021/3/5 4:17 下午
 */
import React, { PureComponent } from "react";
import { Redirect } from "react-router-dom";

class RedirectAuth extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false,
    };
  }

  //
  render() {
    const { isAuth } = this.state;
    return isAuth ? <div>用户名：zyt</div> : <Redirect to="/login" />;
  }
}

export default RedirectAuth;
