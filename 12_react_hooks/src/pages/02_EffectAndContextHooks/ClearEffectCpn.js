/**
 * ClearEffectCpn$ -清除 effect 渲染 多个effect 执行顺序 effect重新执行的依赖条件
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/3/9 5:35 下午
 * @LastEditTime: 2021/3/9 5:35 下午
 */

import React, { useState, useEffect } from "react";

function ClearEffectCpn(props) {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("含有清除函数的同时并没有依赖counter的effect");
    window.addEventListener("click", () => {
      console.log("启动点击事件监听");
    });
    console.log("每次DOM更新时会回调");
    return () => {
      window.removeEventListener("click", () => {
        console.log("取消点击事件监听");
      });
      console.log("DOM被移除时会回调");
    };
  }, []);

  useEffect(() => {
    console.log("依赖了counter发生了修改");
  }, [counter]);
  return (
    <div>
      <h2>当前计数：{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>点击 + 1</button>
    </div>
  );
}

// React 将按照 effect 声明的顺序依次调用组件中的每一个 effect；

// 为什么要在 effect 中返回一个函数？
// 这是 effect 可选的清除机制。每个 effect 都可以返回一个清除函数；
// 如此可以将添加和移除订阅的逻辑放在一起；
// 它们都属于 effect 的一部分；

// useEffect实际上有两个参数：
// 参数一：执行的回调函数；
// 参数二：该useEffect在哪些state发生变化时，才重新执行；（受谁的影响）

export default ClearEffectCpn;
