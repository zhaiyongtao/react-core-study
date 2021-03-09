/**
 * ConTextHook$ - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/3/9 5:59 下午
 * @LastEditTime: 2021/3/9 5:59 下午
 */
import React, { useContext, createContext } from "react";
import User from "./User";
export const UserContext = createContext();
export const ThemeContext = createContext();
function ContextHook(props) {
  return (
    <div>
      <UserContext.Provider value={{ name: "zyt", age: 18 }}>
        <ThemeContext.Provider value={{ color: "red", fontSize: "20px" }}>
          <User />
        </ThemeContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default ContextHook;
