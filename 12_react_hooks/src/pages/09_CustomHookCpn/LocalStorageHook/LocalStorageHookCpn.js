/**
 * LocalStorageHookCpn$ - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/3/22 4:16 下午
 * @LastEditTime: 2021/3/22 4:16 下午
 */
import React, { useState, useEffect } from "react";
import useLocalStorage from "../hooks/UseLocalStorage";

function LocalStorageHookCpn(props) {
  // const [name, setName] = useState(() => {
  //   return JSON.parse(window.localStorage.getItem("name")) || "zyt测试";
  // });
  //
  // useEffect(() => {
  //   window.localStorage.setItem("name", JSON.stringify(name));
  // }, [name]);

  const [name, setName] = useLocalStorage("name");
  return (
    <div>
      <h2>LocalStorageHookCpn：{name}</h2>
      <button onClick={() => setName("lxy")}>设置姓名</button>
    </div>
  );
}

export default LocalStorageHookCpn;
