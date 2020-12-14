import React, {Component} from 'react'

class ChildCpn extends Component {
    render() {
        const {name, age, height} = this.props
        return (
            <div>
                <h2>
                    我是ChildCpn组件
                </h2>
                <p>
                    展示父组件传递过来的数据：{
                    name + "" + age + height
                }
                </p>
            </div>
        )
    }
}

class ClassComponents extends Component {
    render() {
        return (
            <div>
                <ChildCpn name="zyt" age="18" height="1.88"/>
            </div>
        )

    }
}

export default ClassComponents;