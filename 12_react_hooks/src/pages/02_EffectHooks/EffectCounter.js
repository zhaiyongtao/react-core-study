/**
 * EffectCounter$ - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/3/9 5:24 下午
 * @LastEditTime: 2021/3/9 5:24 下午
 */
import React, { useState, useEffect } from "react";

function EffectCounter(props) {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("useEffect");
    document.title = counter;
  });
  console.log("render");
  return (
    <div>
      <h2>当前计数： {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>点击加一</button>
    </div>
  );
}

// 输出顺序： render => useEffect
//useEffect要求我们传入一个回调函数，在React执行完更新DOM操作之后，就会回调这个函数；

export default EffectCounter;
