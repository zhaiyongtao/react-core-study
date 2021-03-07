import React, { PureComponent } from "react";

class ClassCounter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  render() {
    return (
      <div>
        <h2>现在计数：{this.state.counter}</h2>
        <button onClick={() => this.counterChange(1)}> +1 </button>
        <button onClick={() => this.counterChange(-1)}> -1 </button>
      </div>
    );
  }

  counterChange = (num) => {
    this.setState({
      counter: this.state.counter + num,
    });
  };
}

export default ClassCounter;
