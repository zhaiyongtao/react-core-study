import React, {Component} from 'react'
import PropTypes from 'prop-types';

class ChildCpn1 extends Component {
    render() {
        const {name, age, height} = this.props
        return (
            <div>
                <h2>
                    我是ChildCpn组件
                </h2>
                <p>
                    展示父组件传递过来的数据：{
                    name + "," + age +','+ height
                }
                </p>
            </div>
        )
    }
}
// 若果类型不匹配符，内容会正常展示，这个只是EsLint报错，并不影响程序执行，控制台会有警告输出
ChildCpn1.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired,
    height: PropTypes.string,
}
ChildCpn1.defaultProps = {
    name: 'mgy'
}

function ChildCpn2(props) {
    const {name, age, height} = props;
    return (
        <div>
            <h2>我是function组件</h2>
            <p>
                展示父组件传递过来的{name + ',' + age + ',' + height}
            </p>
        </div>
    )
}

class ClassComponents extends Component {
    render() {
        return (
            <div>
                <ChildCpn1 age="zyt" height="1.88"/>
                <ChildCpn2 name="zyt2" age='17' height="1.78"/>
            </div>
        )

    }
}

export default ClassComponents;