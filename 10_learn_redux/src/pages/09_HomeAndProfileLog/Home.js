/**
 * Home.js$ - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/2/23 2:03 下午
 * @LastEditTime: 2021/2/23 2:03 下午
 */
import React, { PureComponent } from "react";
import store from "./store";
import { addAction } from "./store/actions";

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    this.unSubScribe = store.subscribe(() => {
      this.setState({
        counter: store.getState().counter,
      });
    });
  }

  componentWillUnmount() {
    this.unSubScribe();
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={(e) => this.increment(1)}>+1</button>
        <button onClick={(e) => this.addCounter(5)}>+5</button>
      </div>
    );
  }

  increment = (num) => {
    // store.dispatch(addAction(num));
    this.getActionLog(addAction(num));
  };

  addCounter = (num) => {
    // store.dispatch(addAction(num));
    this.getActionLog(addAction(num));
  };

  // 基础封装一个方法
  getActionLog = (action) => {
    console.log("dispatching前", action.type);
    store.dispatch(action);
    console.log("dispatching后", action.type);
  };
}

export default Home;
