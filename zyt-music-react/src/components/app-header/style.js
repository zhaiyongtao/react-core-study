import styled from "styled-components";

export const AppHeaderWrapper = styled.div`
  position: relative;
  z-index: 1000;
  height: 70px;
  box-sizing: border-box;
  background: #242424;
  border-bottom: 1px solid #000;
  
  .content {
    display: flex;
    justify-content: space-between;
    width: 1100px;
    margin: 0 auto;
  }
`


export const HeaderLeft = styled.div`
    display: flex;
  .logo {
    display: block;
    width: 176px;
    height: 70px;
    background-position: 0 0;
    text-indent: -9999px;
  }
  .select-list {
    display: flex;
    line-height: 70px;
  }
`