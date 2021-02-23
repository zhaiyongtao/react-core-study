/**
 * connect$ - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/2/23 4:16 下午
 * @LastEditTime: 2021/2/23 4:16 下午
 */
import React, {PureComponent} from 'react';
// import store from "../store";
import storeContext from "../context";

function connect(mapStateToProps, mapDispatchToProps) {
    return function (WrapperComponent) {
        class ConnectCpn extends PureComponent {
            constructor(props, context) {
                super(props, context);
                this.state = {
                    storeState: this.state = {
                        storeState: mapStateToProps(context.getState())
                    }
                }
            }

            componentDidMount() {
                // 这个地方做setState操作是为了可以重新render
                this.unSubscribe = this.context.subscribe(() => {
                    this.setState({
                        storeState: this.context.getState()
                    })
                })
            }

            componentWillUnmount() {
                this.unSubscribe()
            }

            render() {
                return <WrapperComponent  {...this.props} {...mapStateToProps(this.context.getState())} {...mapDispatchToProps(this.context.dispatch)}/>
            }
        }

        ConnectCpn.contextType = storeContext;
        return ConnectCpn
    }
}

export default connect