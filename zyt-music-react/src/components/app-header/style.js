import styled from "styled-components";

export const AppHeaderWrapper = styled.div`
  position: relative;
  z-index: 1000;
  height: 75px;
  box-sizing: border-box;
  background: #242424;
  border-bottom: 1px solid #000;
  width: 100%;
  .content {
    display: flex;
    justify-content: space-between;
    line-height: 70px;
  }
  .divider {
    height: 5px;
    background-color: #C20C0C;
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
    .select-item{
      position: relative;
      a {
        display: block;
        padding: 0 20px;
        color: #ccc;
      }

    }
  }
`

export const HeaderRight = styled.div`
`