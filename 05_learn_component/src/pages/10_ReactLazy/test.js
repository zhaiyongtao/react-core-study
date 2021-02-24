/**
 * test$ - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/2/24 4:46 下午
 * @LastEditTime: 2021/2/24 4:46 下午
 */
import React, {PureComponent} from 'react';

class Test extends PureComponent {
    constructor(props) {
        super(props);

        this.state ={
            testCpn:''
        }
    }
    componentDidMount() {
        this.text = './view'
        const Test = () => import(`${this.text}`)
        Test().then((mod) => {
            console.log(mod)
            this.setState({
                testCpn: mod.default
            })
        })
    }

    render() {
        const Cpn = this.state.testCpn;
        return (
            <div>
                {Cpn&&<Cpn/>}
            </div>
        );
    }
}


export default Test;