// 生命周期劫持

import React, {PureComponent} from 'react';


class Home extends PureComponent {
    render() {
        return (
            <div>
                Home
            </div>
        )
    }
}

class Details extends PureComponent {
    render() {
        return (
            <div>
                Details
            </div>
        )
    }
}

function logRenderTime(WrapperCpn) {
    return class extends PureComponent {
        UNSAFE_componentWillMount() {
            this.begin = Date.now()
        }

        componentDidMount() {
            this.end = Date.now();
            const interval = this.end - this.begin;
            // 组件的名字
            console.log(`${WrapperCpn.name}渲染使用时间:${interval}`)
        }

        render() {
            return (
                <WrapperCpn {...this.props} />
            )
        }

    }
}

const LogHome = logRenderTime(Home);
const LogDetails = logRenderTime(Details);

class HighCpnLifeCircle extends PureComponent {
    render() {
        return (
            <div>
                <LogHome />
                <LogDetails/>
            </div>
        );
    }
}

export default HighCpnLifeCircle;