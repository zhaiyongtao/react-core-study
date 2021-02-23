/**
 * Home.js$ - 案例组件
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/2/23 2:03 下午
 * @LastEditTime: 2021/2/23 2:03 下午
 */
import React, {PureComponent} from 'react';
// import store from "./store";
import {addAction} from "./store/actions";
import connect from "./utils/connect";

class Home extends PureComponent {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         counter: 0
    //     }
    // }
    //
    // // componentDidMount() {
    // //     this.unSubScribe = store.subscribe(() => {
    // //         this.setState({
    // //             counter: store.getState().counter,
    // //         })
    // //     })
    // // }
    // //
    // // componentWillUnmount() {
    // //     this.unSubScribe()
    // // }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <h2>当前计数: {this.props.counter}</h2>
                <button onClick={e => this.props.increment(1)}>+1</button>
                <button onClick={e => this.props.addCounter(5)}>+5</button>
            </div>
        );
    }

    // increment = (num) => {
    //     store.dispatch(addAction(num))
    // }
    //
    // addCounter = (num) => {
    //     store.dispatch(addAction(num))
    // }


}

const mapStateToProos = (state) => ({
    counter: state.counter
})

const mapStateToProps = (dispatch) => ({
    increment: (num) => {
        dispatch(addAction(num))
    },
    addCounter: (num) => {
        dispatch(addAction(num))
    }
})

export default connect(mapStateToProos, mapStateToProps)(Home);