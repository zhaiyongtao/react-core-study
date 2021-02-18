// 全局定制自己的主题，通过Provider进行共享

import React, {PureComponent} from 'react';
import styled, {ThemeProvider} from 'styled-components'


// ThemeProvider 中提供的数据
const ProfileWrapper = styled.div`
  color: ${props => props.theme.color};
  font-size: ${props => props.theme.fontSize};
`

function Home(prop) {
    return <div>Home</div>
}

function ProFile(props) {
    return <ProfileWrapper>ProFile</ProfileWrapper>
}

class CssInJsTheme extends PureComponent {
    render() {
        return (
            <div>
                <ThemeProvider theme={{color: "red", fontSize: "30px"}}>
                    <Home/>
                    <ProFile/>
                </ThemeProvider>
            </div>
        );
    }
}


export default CssInJsTheme;