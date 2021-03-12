/**
 * classCounter$ - 使用class组件实现计数器
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/3/9 5:09 下午
 * @LastEditTime: 2021/3/9 5:09 下午
 */

import React, { PureComponent } from "react";

class ClassCounter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  componentDidMount() {
    document.title = this.state.counter;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    document.title = this.state.counter;
  }

  render() {
    return (
      <div>
        <h2>当前计数：{this.state.counter}</h2>
        <button
          onClick={() => {
            this.setState({ counter: this.state.counter + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default ClassCounter;
