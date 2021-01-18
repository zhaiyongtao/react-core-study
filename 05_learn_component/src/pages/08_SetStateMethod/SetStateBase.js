import React, {Component} from 'react';

class SetStateBase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Hello World!',
            number: 1,
        }
    }

    componentDidUpdate(prevProps, provState, snapshot) {
        console.log(this.state.message); // 你好 ,setState重新渲染
    }

    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
                <h2>{this.state.number}</h2>
                <button onClick={() => this.changeText()}>改变文本</button>
                <button onClick={() => this.changeNumber()}>改变数字</button>
            </div>
        );
    }

    changeText = () => {
        this.setState({message: '你好'})
        console.log(this.state.message) // Hello World! =》 this.setState 是异步方法
    }

    changeNumber = () => {
        this.setState({number: '123'}, () =>{
            console.log (this.state.number) // 123 => 获取到更新后的值
        })
    }

}

export default SetStateBase;