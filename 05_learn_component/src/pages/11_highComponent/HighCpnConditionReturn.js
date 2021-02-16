import React, {PureComponent} from 'react';

function loginAuth (Page) {
    return props => {
        if (props.isLogin) {
            return <Page/>
        } else {
            return <LoginPage/>
        }
    }
}

function Page () {
    return <h2>Page</h2>
}

function LoginPage () {
    return <h2>LoginPage</h2>
}

// 页面是否登录
const AuthCartPage = loginAuth(Page)

class HighCpnConditionReturn extends PureComponent {
    render() {
        return (
            <div>
                <AuthCartPage isLogin={false} />
            </div>
        );
    }
}

export default HighCpnConditionReturn;