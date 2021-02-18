// css in js style-components 中的attrs使用，以及伪元素的使用
import React, {PureComponent} from 'react';
import styled from "styled-components";


// left 来自标签上的属性
const Thing = styled.div.attrs({ tabIndex: 0, paddingLeft: props => props.left })`
  color: blue;

  &:hover {
    color: red; // <Thing> when hovered
  }

  
  & ~ & {
    background: tomato; // 第一个<Thing>之后的所有<Thing>元素设置样式
    margin-left: ${props => props.paddingLeft}; // 来自attrs配置的属性
    padding: ${props => props.left}; // 也可以直接使用来自标签内的属性 透传
  }
  //
  & + & {
    background: lime; // 当前<Thing>元素后出现的紧挨着的<Thing>的元素设置样式
  }
  //
  &.something {
    //background: orange; // <Thing> tagged with an additional CSS class ".something"
  }
  //
  .something-else & {
    border: 1px solid; // <Thing> inside another element labeled ".something-else"
  }
`



class CssInJsAttrs extends PureComponent {
    render() {
        return (
                <React.Fragment>
                    <Thing>Hello world!</Thing>
                    <Thing>How ya doing?</Thing>
                    <Thing className="something" left="12px">The sun is shining...</Thing>
                    <div>Pretty nice day today.</div>
                    <Thing>Don't you think?</Thing>
                    <div className="something-else">
                        <Thing>Splendid.</Thing>
                    </div>
                </React.Fragment>
        );
    }
}


export default CssInJsAttrs;