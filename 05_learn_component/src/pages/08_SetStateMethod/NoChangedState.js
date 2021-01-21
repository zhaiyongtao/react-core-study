/**
 * NoChangedState$ - State的数据不可变性
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/1/20 6:08 下午
 * @LastEditTime: 2021/1/20 6:08 下午
 */

import React, {PureComponent} from 'react';

class NoChangedState extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            friends: [
                {
                    name: 'zyt',
                    age: 15
                },
                {
                    name: 'zs',
                    age: 18,
                },
                {
                    name: 'ls',
                    age: 20,
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <h2>
                    朋友列表：
                </h2>
                <div>
                    <ul>
                        {
                            this.state.friends.map((item, index) => (
                                <li key={item.name}>
                                    <span>
                                        {`姓名:${item.name} 年龄: ${item.age}`}
                                    </span>
                                    <button onClick={e => this.incrementAge(index)}>年龄+1</button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <button onClick={() => this.insertFriends()}>添加朋友</button>
            </div>
        );
    }

    incrementAge = (index) => {
        let newFriends = [...this.state.friends];
        newFriends[index].age += 1;
        this.setState({
            friends: newFriends
        })
    }

    insertFriends = () => {
        this.setState({
            friends: [...this.state.friends, {name: 'qwe', age: 123}]

        })
    }

}

export default NoChangedState;

