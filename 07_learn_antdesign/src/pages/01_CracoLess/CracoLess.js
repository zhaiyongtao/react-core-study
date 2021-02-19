/**
 * CracoLess$ - 通过修改craco配置修改less样式
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/2/19 3:27 下午
 * @LastEditTime: 2021/2/19 3:27 下午
 */

//按钮的基础颜色 变成了#1DA57A
import React, {PureComponent} from 'react';
import { Button } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import TestAlias from 'components/01_CracoLess/TestAlias'

class CracoLess extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            loadings: []
        }
    }

    enterLoading = (index) => {
        this.setState(({loadings}) => {
            const newLoadings = [...loadings];
            newLoadings[index] = true
            return {
                loadings: newLoadings
            }
        });

        setTimeout(() => {
            this.setState(({loadings}) => {
                const newLoadings = [...loadings];
                newLoadings[index] = false;
                return {
                    loadings : newLoadings
                }
            })
        }, 6000)
    }

    render() {
        const {loadings} = this.state
        return (
            <>
                <Button type="primary" loading>
                    Loading
                </Button>
                <Button type="primary" size="small" loading>
                    Loading
                </Button>
                <Button type="primary" icon={<PoweroffOutlined/>} loading/>
                <br/>
                <Button type="primary" loading={loadings[0]} onClick={() => this.enterLoading(0)}>
                    Click me!
                </Button>
                <Button
                    type="primary"
                    icon={<PoweroffOutlined/>}
                    loading={loadings[1]}
                    onClick={() => this.enterLoading(1)}
                >
                    Click me!
                </Button>
                <Button
                    type="primary"
                    icon={<PoweroffOutlined/>}
                    loading={loadings[2]}
                    onClick={() => this.enterLoading(2)}
                />
                <TestAlias />
            </>
        );
    }
}

export default CracoLess;