/**
 * CssInJs$ - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/2/18 5:06 下午
 * @LastEditTime: 2021/2/18 5:06 下午
 */

import React, {PureComponent} from 'react';
import  styled from 'styled-components'
// styled.div => 返回一个组件
const HomeWrapper = styled.div`
  color: purple;
  h2 {
    font-size: 50px;
  }
  ul > li {
    color: orange;

    &.active {
      color: red;
    }

    &:hover {
      background: #aaa;
    }

    &::after {
      content: "abc"
    }
  }
`
class CssInJs extends PureComponent {
    render() {
        return (
                // <div>
            <HomeWrapper>
                <h2>我是Home标题</h2>
                <ul>
                    <li>我是列表1</li>
                    <li>我是列表2</li>
                    <li>我是列表3</li>
                </ul>
            </HomeWrapper>
                // </div>
        );
    }
}

export default CssInJs;