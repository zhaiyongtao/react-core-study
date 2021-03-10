/**
 * CallbackHook$ - useCallback() 的使用 => 使用场景主要是为了性能优化
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/3/10 10:24 上午
 * @LastEditTime: 2021/3/10 10:24 上午
 */

// 通常而言，如果父组件更新了，子组件也会执行更新；但是大多数场景下，更新是没有必要的，
// 我们可以借助useCallback来返回函数，然后把这个函数作为props传递给子组件；这样，子组件就能避免不必要的更新。
import React, { memo, useCallback, useState } from "react";

const CounterIncrementBtn = memo((props) => {
  console.log("CounterIncrement被渲染:", props.name);
  return <button onClick={props.increment}> + 1</button>;
});

function CallbackHook(props) {
  const [count, setCount] = useState(0);
  const increment1 = useCallback(function increment() {
    setCount(count + 1);
  }, []);

  const increment2 = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2>当前计数：{count}</h2>
      <CounterIncrementBtn increment={increment1} name="increment1" />
      <CounterIncrementBtn increment={increment2} name="increment2" />
    </div>
  );
}

export default CallbackHook;
