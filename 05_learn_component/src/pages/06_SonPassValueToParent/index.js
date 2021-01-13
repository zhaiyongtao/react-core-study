import React, {Component} from "react";


class SonPassValueToParent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }


    // 注意执行上下文的问题
    changeCounter = (count) => {
        this.setState({
            counter: this.state.counter + count,
        })
    }

    render() {
        return (
            <>
                <h2>
                    当前计数：{this.state.counter}
                </h2>
                <CounterButton operator="+1" btnClick = {() => this.changeCounter(1)} />
                <CounterButton operator="-1" btnClick = {() => this.changeCounter(-1)} />
            </>
        )
    }
}

function CounterButton (props) {
    const {operator, btnClick} = props;
    return <button onClick={btnClick}>{operator}</button>
}

export default SonPassValueToParent;