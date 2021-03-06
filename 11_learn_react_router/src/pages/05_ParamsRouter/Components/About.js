/**
 * About$ - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/3/3 3:34 下午
 * @LastEditTime: 2021/3/3 3:34 下午
 */
import React, { PureComponent } from "react";

class About extends PureComponent {
  constructor(props) {
    super(props);
    console.log("location", this.props.location);
    //  {
    //   hash: "",
    //   key: "3qhvi0",
    //   pathname: "/about",
    //   query: {
    //     age: 30,
    //     name: "kobe",
    //     __proto__: Object,
    //   },
    //   search: "?apikey=123",
    //   state: {
    //     height: 1.98,
    //     address: "洛杉矶",
    //   },
    // };
  }

  render() {
    return <div>About</div>;
  }
}

export default About;
