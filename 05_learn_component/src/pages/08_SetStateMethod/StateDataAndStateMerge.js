import React, {Component} from 'react';

class StateDataAndStateMerge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'zyt',
            message: 'Hello word',
            counter: 1,
        }
    }
    render() {
        return (
            <div>
                <h2>name的值： {this.state.name}</h2>
                {/*'hello zyt, '*/}
                <h2>message的值：{this.state.message}</h2>
                <h2>counter的值：{this.state.counter}</h2>
                <button id="messageBtn" onClick={() => this.changeMessage()}>改变message的值</button><br/>
                <button id="counterBtn" onClick={() => this.increment()}>改变Counter的值,每次+1</button><br/>
                <button id="counterMergeBtn" onClick={() => this.inCrementMerge()}>改变Counter的值,每次+3</button><br/>
            </div>
        );
    }

    changeMessage = () => {
        // name 的值还存在的
        // 源码中其实是有对 原对象 和 新对象进行合并的：事实上就是使用 Object.assign(target, ...sources) 来完成的；
        this.setState ({
            message: 'hello zyt'
        })
    }

    // 每次调用都是 +1 ，
    // 在源码的processUpdateQueue中有一个do...while循环，就是从队列中取出多个state进行合并的；
    increment = () => {
        this.setState({
            counter: this.state.counter +1 ,
        })
        this.setState({
            counter: this.state.counter +1 ,
        })
        this.setState({
            counter: this.state.counter +1 ,
        })
        this.setState({
            counter: this.state.counter +1 ,
        })
    }
// 原因是多个state进行合并时，每次遍历，都会执行一次函数
    inCrementMerge = () => {
        this.setState((state, props) => {
            return {
                counter: state.counter + 1
            }
        })
        this.setState((state, props) => {
            return {
                counter: state.counter + 1
            }
        })
        this.setState((state, props) => {
            return {
                counter: state.counter + 1
            }
        })
    }
}

export default StateDataAndStateMerge;