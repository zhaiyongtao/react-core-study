/**
 * Profile$ - 案例组件
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/2/23 2:03 下午
 * @LastEditTime: 2021/2/23 2:03 下午
 */
import React, {PureComponent} from 'react';
import {subCounter} from "./store/actionCreators";
import {connect} from 'react-redux';

class Profile extends PureComponent {

    render() {
        return (
            <div>
                <hr/>
                <h1>Profile</h1>
                <div>
                    <h2>当前计数: {this.props.counter}</h2>
                    <button onClick={e => this.props.decrement(1)}>-1</button>
                    <button onClick={e => this.props.subCounter(5)}>-5</button>
                </div>
                <h1>Banners</h1>
                <ul>
                    {
                        this.props.banners.map((item, index) => {
                            return <li key={item.acm}>{item.title}</li>
                        })
                    }
                </ul>
                <h1>Recommends</h1>
                <ul>
                    {
                        this.props.recommends.map((item, index) => {
                            return <li key={item.acm}>{item.title}</li>
                        })
                    }
                </ul>
            </div>
        );
    }

    // decrement = (num) => {
    //     store.dispatch(subCounter(num))
    // }
    // subCounter = (num) => {
    //     store.dispatch(subCounter(num))
    // }

}

const mapStateToProps = (state) => ({
    counter: state.counter,
    banners: state.banners,
    recommends: state.recommends
})

const mapDispatchToProps = (dispatch) => ({
    decrement: (num) => dispatch(subCounter(num)),
    subCounter: (num) => dispatch(subCounter(num)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Profile);