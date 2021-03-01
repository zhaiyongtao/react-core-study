/**
 * Home.js$ - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/2/23 2:03 下午
 * @LastEditTime: 2021/2/23 2:03 下午
 */
import React, { PureComponent } from "react";
import store from "./store";
import { addAction, getData } from "./store/actions";
import applyMiddleware from "./utils/applyMiddleware";
import dispatchAndLog from "./utils/dispatchAndLog";
import dispatchThunk from "./utils/dispatchThunk";

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    // applyMiddWare的本质就是修改dispatch
    applyMiddleware(store, [dispatchAndLog, dispatchThunk]);
    console.log(store);
  }

  componentDidMount() {
    this.unSubScribe = store.subscribe(() => {
      this.setState({
        counter: store.getState().counter,
      });
    });
    // 校验dispatchThunk中间件
    console.log(store.dispatch);
    store.dispatch(getData);
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
    console.log("qwe", store);
    store.dispatch(addAction(num));
  };

  addCounter = (num) => {
    store.dispatch(addAction(num));
  };
}

export default Home;
