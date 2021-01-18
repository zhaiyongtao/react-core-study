import React, {Component} from 'react';

class SynchronousSetState extends Component {

    constructor() {
        super();
        this.state = {
            message: ' hello world',
            number: 1,
        }
    }

    componentDidMount() {
        const btnEle = document.getElementById('numberBtn');
        btnEle.addEventListener('click', () => {
            this.setState({
                number: '2'
            })
            console.log(this.state.number) // 2 => 原生Dom事件中是同步的
        })
    }

    render() {
        return (
            <div>
                <h2>
                    改变文字{this.state.message}
                </h2>
                <button onClick={() => this.changeMessage()}>改变文字</button>
                <button id="numberBtn">改变数字</button>
            </div>
        );
    }

    changeMessage = () => {
        setTimeout(() => {
            this.setState({
                message: 'hello zyt'
            })
            console.log(this.state.message) // hello zyt =》 源码enqueueSetState判断
        },0)
        console.log(this.state.message) // hello world => setTimeout 是异步的
    }
}

export default SynchronousSetState;