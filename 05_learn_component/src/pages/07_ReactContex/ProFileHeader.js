import React, {Component} from "react";
import {ThemeContext} from "./ProfileFooter";

export const UserContext = React.createContext({nickname: '-1', level: 999})

class ProfileHeader extends Component {
    render() {
        return (
            <UserContext.Consumer>
                {
                    value => (
                        <ThemeContext.Consumer>
                            {
                                theme => (
                                    <div>
                                        <h2 style={theme}>用户昵称：{value.nickname}</h2>
                                        <h2>用户等级：{this.context.level}</h2>
                                    </div>
                                )
                            }
                        </ThemeContext.Consumer>

                    )
                }
            </UserContext.Consumer>
        )
    }
}

ProfileHeader.contextType = UserContext; // 对应的是 => this.context所对应的context

export default ProfileHeader
