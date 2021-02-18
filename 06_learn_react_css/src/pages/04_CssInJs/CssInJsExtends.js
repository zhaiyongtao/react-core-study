// style-components 样式的继承

import React, {PureComponent} from 'react';
import styled from "styled-components";

const HYPButton = styled.button`
  padding: 8px 30px;
  border-radius: 5px;
`
const HYPWarnButton = styled(HYPButton)`
  background-color: red;
  color: #fff;
`
const HYPPrimaryButton = styled(HYPButton)`
  background-color: greenyellow;
  color: #fff;
`

class CssInJsExtends extends PureComponent {
    render() {
        return (
            <div>
                <HYPButton>取消</HYPButton>
                <HYPWarnButton>警告</HYPWarnButton>
                <HYPPrimaryButton>确认</HYPPrimaryButton>
            </div>
        );
    }
}


export default CssInJsExtends;