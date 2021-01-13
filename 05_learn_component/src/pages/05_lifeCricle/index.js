import React, {Component} from  'react';

class LifeCircle extends  Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        }
        console.log("调用constructor方法")
    }
    render() {
        console.log("调用render方法")
        return (
            <div>
                <h2>当前计数:{this.state.counter}</h2>
                <button onClick={() => {this.increment()}}>+1 </button>
            </div>
        )
    }

    increment= () => {
        this.setState({
            counter: this.state.counter + 1,
        })
    }

    componentDidMount() {
        console.log("调用componentDidMount方法");
    }

    componentDidUpdate() {
        console.log("调用componentDidUpdate方法");
    }

    componentWillUnmount() {
        console.log("调用componentWillUnmount方法");
    }
}

export default LifeCircle;