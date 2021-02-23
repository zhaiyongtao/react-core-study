/**
 * connect$ - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/2/23 4:16 下午
 * @LastEditTime: 2021/2/23 4:16 下午
 */
import React, {PureComponent} from 'react';
import store from "../store";

function connect(mapStateToProps, mapDispatchToProps) {
    return function (WrapperComponent) {
        return class extends PureComponent {
            constructor(props) {
                super(props);
                this.state = {
                    storeState: mapStateToProps(store.getState())
                }
            }
            componentDidMount() {
                // 这个地方做setState操作是为了可以重新render
               this.unSubscribe =  store.subscribe(() => {
                    this.setState({
                        storeState: mapStateToProps(store.getState())
                    })
                })
            }
            componentWillUnmount() {
                this.unSubscribe()
            }

            render() {
               return <WrapperComponent  {...this.props} {...mapStateToProps(store.getState())} {...mapDispatchToProps(store.dispatch)}/>
            }
        }
    }
}

export default connect