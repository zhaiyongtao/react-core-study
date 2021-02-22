/**
 * CounterExample$ - redux使用案例
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/2/22 5:34 下午
 * @LastEditTime: 2021/2/22 5:34 下午
 */

import React, {PureComponent} from 'react';
import store from "./store";
import {addNumber, subNumber} from './store/actions'

class CounterExample extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            counter: store.getState().counter
        }
    }

    componentDidMount() {
       this.unSubscrib = store.subscribe(() => {
            this.setState({
                counter: store.getState().counter
            })
        })
    }
    componentWillUnmount() {
        // 取消订阅
        this.unSubscrib()
    }

    render() {
        return (
            <div>
                <h2>Home</h2>
                <span>当前计数：{this.state.counter}</span>
                <button onClick={e => this.addNumberFn(1)}>+1</button>
                <button onClick={e => this.subNumberFn(5)}>-5</button>
            </div>
        );
    }

    addNumberFn = (num) => {
        store.dispatch(addNumber(num))
    }

    subNumberFn = (num) => {
        store.dispatch(subNumber(num))
    }

}

export default CounterExample;