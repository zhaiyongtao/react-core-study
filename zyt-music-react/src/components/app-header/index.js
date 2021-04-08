/**
 * app-header$ - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/3/29 11:21 下午
 * @LastEditTime: 2021/3/29 11:21 下午
 */
import React, {memo} from "react";
import {NavLink} from "react-router-dom";
import {AppHeaderWrapper, HeaderLeft} from './style'

export default memo(function AppHeader() {
    return (
        <AppHeaderWrapper>
                <div className="content">
                    <HeaderLeft>
                        <a className="logo sprite_01" hidefocus="true" href="/#">网易云音乐</a>
                        <div className="select-list">
                            <NavLink to="/" >发现音乐</NavLink>
                            <NavLink to="/my-music" >我的音乐</NavLink>
                            <NavLink to="/friend" >朋友</NavLink>
                        </div>
                    </HeaderLeft>

                </div>


        </AppHeaderWrapper>
    )
});
