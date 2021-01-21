/**
 * HowToUseRef$ - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/1/21 5:59 下午
 * @LastEditTime: 2021/1/21 5:59 下午
 */

import React, {PureComponent} from 'react';

class HowToUseRef extends PureComponent {
    constructor(props) {
        super(props);
        this.createRef = React.createRef()
        this.callbackRefInfo =null;
    }

    render() {
        return (
            <div>
                <h2 ref="stringRef">string Ref</h2>
                <h2 ref={this.createRef}>Creat Ref</h2>
                <h2 ref={(element) =>this.callbackRefInfo = element }>CallBack Ref</h2>
                <button onClick={() => this.changeText()}>改变文本</button>
            </div>
        );
    }

    changeText = () => {
        console.log(this.refs.stringRef) //<h2>你好，stringRef </h2>
        this.refs.stringRef.innerHTML= "你好，stringRef ";
        console.log(this.createRef.current)//<h2>你好，createRef</h2>
        this.createRef.current.innerHTML = "你好，createRef"
        console.log(this.callbackRefInfo) // <h2>你好，callbackRefInfo</h2>
        this.callbackRefInfo.innerHTML = "你好，callbackRefInfo"
    }
}

export default HowToUseRef;