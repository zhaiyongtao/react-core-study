/**
 * test$ - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/1/27 5:53 下午
 * @LastEditTime: 2021/1/27 5:53 下午
 */

import React, {Component} from 'react';

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            component: null
        }
    }
    render() {
        return (
            <div>
              请输入数据  <input onChange={(e) => this.changgeInout(e)} value={this.state.url} />
            </div>
        );
    }

    changgeInout = (e) => {
        console.log(e.target)
    }
}

export default Test;