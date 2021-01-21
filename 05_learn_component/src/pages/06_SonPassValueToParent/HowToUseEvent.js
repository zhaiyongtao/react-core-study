/**
 * HowToUseEvent$ -  事件总线的使用
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/1/21 5:40 下午
 * @LastEditTime: 2021/1/21 5:40 下午
 */

import React, {PureComponent} from 'react';

import { EventEmitter } from "events";

const eventBus = new EventEmitter();

class ProfileHeader extends PureComponent {
    render() {
       return(
           <div>
               <h2>
                   文件头
               </h2>
               <button onClick={() => this.btnClick()}>按钮</button>
           </div>
       )
    }

    btnClick = () => {
        eventBus.emit("headerClick", "why", 18);
    }
}

class ProfileContent extends PureComponent {
    componentDidMount() {
        eventBus.addListener("headerClick", this.headerClick)
    }
    headerClick(name, age) {
        console.log(name, age);
    }

    componentWillUnmount() {
        eventBus.removeListener("headerClick", this.headerClick);
    }
    render() {
        return (
            <div>
                <ProfileHeader />
                <ul>
                    <li>设置1</li>
                    <li>设置2</li>
                    <li>设置3</li>
                    <li>设置4</li>
                    <li>设置5</li>
                </ul>
            </div>
        )
    }
}


class HowToUseEvent extends PureComponent {
    render() {
        return (
            <div>
                <ProfileContent />
            </div>
        );
    }
}

export default HowToUseEvent;