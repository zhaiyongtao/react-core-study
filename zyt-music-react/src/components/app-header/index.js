/**
 * app-header$ - APP 头
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/3/29 11:21 下午
 * @LastEditTime: 2021/3/29 11:21 下午
 */
import React, {memo} from "react";
import {NavLink} from "react-router-dom";
import classnames from "classnames";
import {headerLinks} from  "@/services/local-data"
import {AppHeaderWrapper, HeaderLeft, HeaderRight} from './style'

export default memo(function AppHeader() {

    const showItem = (item, index) => {
        if (index < 3) {
            return (
                <NavLink to={item.link} exact>{item.title} <i className="sprite_01 icon" /></NavLink>
            )
        } else {
            return <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
        }
    }

    return (
        <AppHeaderWrapper>
            <div className="content wrap-v1">
                <HeaderLeft>
                    <a className="logo sprite_01" hidefocus="true" href="/#">网易云音乐</a>
                    <div className="select-list">
                        {
                            headerLinks.map((item, index) => {
                                return (<div className={classnames("select-item")} key={item.title}>
                                    {showItem(item, index)}
                                </div>)
                            })
                        }

                    </div>
                </HeaderLeft>

                <HeaderRight>
                    right
                </HeaderRight>

            </div>

            <div className="divider"/>
        </AppHeaderWrapper>
    )
});
