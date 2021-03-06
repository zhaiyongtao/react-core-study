/**
 * User$ - user 组件
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/3/3 5:48 下午
 * @LastEditTime: 2021/3/3 5:48 下午
 */

import React, { PureComponent } from "react";
class User extends PureComponent {
  constructor(props) {
    super(props);
    console.log("match", this.props.match.params.userId); // User.js:13 match 12
  }
  render() {
    return <div>User</div>;
  }
}

export default User;
