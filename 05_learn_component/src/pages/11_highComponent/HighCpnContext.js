import React, {Component, createContext} from 'react';

const UserContext = createContext({nickName:'默认', level: -999})

function withUser(WrappertCpm) {
    // 第一种方式： 返回一个新的组件，新的组件内的返回的是传递进来的参数组件
    // return class extends Component {
    //     render() {
    //         return (
    //             <UserContext.Consumer>
    //                 {
    //                     value => {
    //                         // 这个地方是为了把value当做props传递给组件
    //                         return <WrappertCpm {...this.props} {...value}/>
    //                     }
    //                 }
    //             </UserContext.Consumer>
    //         )
    //     }
    // }
    //
    //

    // 第二方式：修改传递进来的组件的props
    return props => {
        return (
            <UserContext.Consumer>
                {
                    value => {
                        return <WrappertCpm {...props} {...value}/>
                    }
                }
            </UserContext.Consumer>
        )
    }
}

function Header (props) {
    const {nickName, level, type} = props;
    return <h2>Header {"昵称:" + nickName + "等级:" + level + '' + type }</h2>
}

function Footer(props) {
    const {nickName, level, type} = props;
    return <h2>Header {"昵称:" + nickName + "等级:" + level + '' + type }</h2>
}

const UserHeader = withUser(Header);
const UserFooter = withUser(Footer);


class HighCpnContext extends Component {
    render() {
        return (
            <div>
                <UserContext.Provider value={{ nickName: "zyt", level: 90 }}>
                    <UserHeader type={'header'} />
                    <UserFooter type= {'footer'} />
                </UserContext.Provider>
            </div>
        );
    }
}

export default HighCpnContext;