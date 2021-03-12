/**
 * User$ - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/3/9 6:08 下午
 * @LastEditTime: 2021/3/9 6:08 下午
 */
import React, { useContext } from "react";
import { ThemeContext, UserContext } from "./ContextHook";

function User(props) {
  const userInfo = useContext(UserContext);
  const themeInfo = useContext(ThemeContext);
  console.log(userInfo);
  console.log(themeInfo);
  return (
    <>
      <div>user</div>
    </>
  );
}

export default User;
