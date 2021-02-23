/**
 * Profile$ - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/2/23 2:03 下午
 * @LastEditTime: 2021/2/23 2:03 下午
 */
import React, {PureComponent} from 'react';
import store from "./store";
import {subCounter} from "./store/actions";

class Profile extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    componentDidMount() {
        this.unSubscribe =  store.subscribe(() => {
            this.setState({
                counter: store.getState().counter
            })
        })
    }

    componentWillUnmount() {
        this.unSubscribe()
    }

    render() {
        return (
            <div>
                <hr/>
                <h1>Profile</h1>
                <div>
                    <h2>当前计数: {this.state.counter}</h2>
                    <button onClick={e => this.decrement(1)}>-1</button>
                    <button onClick={e => this.subCounter(5)}>-5</button>
                </div>
            </div>
        );
    }

    decrement = (num) => {
        store.dispatch(subCounter(num))
    }
    subCounter = (num) => {
        store.dispatch(subCounter(num))
    }

}


export default Profile;