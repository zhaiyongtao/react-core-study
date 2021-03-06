/**
 * Home$ - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/3/3 3:34 下午
 * @LastEditTime: 2021/3/3 3:34 下午
 */
import React, { PureComponent } from "react";

class Home extends PureComponent {
  constructor(props) {
    super(props);
    // console.log("state", this.props.location.state); //  state {name: "zyt", from: "login"}
  }
  render() {
    return <div>Home</div>;
  }
}

export default Home;
