/**
 * Home.js$ - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/2/23 2:03 下午
 * @LastEditTime: 2021/2/23 2:03 下午
 */
import React, { PureComponent } from "react";
import { addAction } from "./store/counter/actionCreactors";
import { fetchHomeMultidata } from "./store/home/actionCreactors";
import { connect } from "react-redux";
import store from "./store";

class Home extends PureComponent {
  componentDidMount() {
    console.log(store.getState());
    this.props.fetchHomeData();
  }

  render() {
    return (
      <div>
        <h1>11Home</h1>
        <h2>当前计数: {this.props.counter}</h2>
        <button onClick={(e) => this.props.increment(1)}>+1</button>
        <button onClick={(e) => this.props.addCounter(5)}>+5</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counterReducer.counter,
    banners: state.homeReducer.banners,
    recommends: state.homeReducer.recommends,
  };
};

const mapDispatchToProps = (dispatch) => ({
  increment: (num) => {
    dispatch(addAction(num));
  },
  addCounter: (num) => {
    dispatch(addAction(num));
  },
  // 可传查询参数变量
  fetchHomeData: () => {
    dispatch(fetchHomeMultidata());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
