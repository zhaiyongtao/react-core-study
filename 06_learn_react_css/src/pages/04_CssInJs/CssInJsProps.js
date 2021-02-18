/**
 * CssInJsProps$ - 动态属性
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/2/18 5:20 下午
 * @LastEditTime: 2021/2/18 5:20 下午
 */

import React, {PureComponent} from 'react';
import styled from "styled-components";

const HYPInput = styled.input.attrs({
    placeholder: "请填写密码",
    paddingLeft: props => props.left || "5px"
})`
  border-color: red;
  color: ${props => props.color}; //透传
  padding-left: ${props => props.paddingLeft};
  &:focus {
    outline-color: orange;
  }
`

class CssInJsProps extends PureComponent {
    render() {
        return (
            <div>
                <HYPInput type="password" color="blue"/>
            </div>
        );
    }
}


export default CssInJsProps;