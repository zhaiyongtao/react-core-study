import React, {PureComponent} from 'react';
import {Card, Avatar, Button} from "antd";
import {EditOutlined, EllipsisOutlined, SettingOutlined} from '@ant-design/icons';
import { CSSTransition } from 'react-transition-group';

const {Meta} = Card;

class CssTransition extends PureComponent {

    constructor(props) {
        super(props);

        this.state ={
            isShowCard: true,
        }
    }


    render() {
        const {isShowCard} = this.state
        return (
            <>
                <Button onClick={e => this.setState({isShowCard: !this.state.isShowCard})}>显示/隐藏</Button>
                {/*unmountOnExit => 是隐藏之后是否继续存在dom*/}
                <CSSTransition in={this.state.isShowCard}
                               classNames="card"
                               timeout={1000} unmountOnExit={true}
                               onEnter={el => console.log("进入动画前")}
                               onEntering={el => console.log("进入动画")}
                               onEntered={el => console.log("进入动画后")}
                               onExit={el => console.log("退出动画前")}
                               onExiting={el => console.log("退出动画")}
                               onExited={el => console.log("退出动画后")}
                >
                    <div>
                        <Card
                            style={{width: 300}}
                            cover={
                                <img
                                    alt="example"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                />
                            }
                            actions={[
                                <SettingOutlined key="setting"/>,
                                <EditOutlined key="edit"/>,
                                <EllipsisOutlined key="ellipsis"/>,
                            ]}
                        >
                            <Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                                title="Card title"
                                description="This is the description"
                            />
                        </Card>
                    </div>
                </CSSTransition>
            </>
        );
    }
}


export default CssTransition;