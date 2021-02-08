/**
 * RefTypeDemo.js$ - ref节点的类型Demo
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/2/8 4:55 下午
 * @LastEditTime: 2021/2/8 4:55 下午
 */

// 当 ref 属性用于 HTML 元素时，构造函数中使用 React.createRef() 创建的 ref 接收底层 DOM 元素作为其 current 属性；
// 当 ref 属性用于自定义 class 组件时，ref 对象接收组件的挂载实例作为其 current 属性；
// 你不能在函数组件上使用 ref 属性，因为他们没有实例；


import React, {PureComponent} from 'react';


class Counter extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    render() {
        return (
            <div>
                <h2>当前数字：{this.state.counter}</h2>
                <button onClick={() => this.increment(1)}>点击+1</button>
                <button onClick={() => this.increment(-1)}>点击-1</button>
            </div>
        )
    }
    increment = (num) => {
        this.setState({
            counter: this.state.counter + num
        })
    }

}

class RefTypeDemo extends PureComponent {

   refTypeDemoRef = React.createRef();
    render() {
        return (
            <>
                <Counter ref={this.refTypeDemoRef} />
                <button onClick={() => this.inscrement(1)}>点击+1</button>
            </>
        );
    }
    inscrement = (num) => {
        //组件中的ref.current指向的是组件的实例
        this.refTypeDemoRef.current.increment(num)
    }
}

export default RefTypeDemo;