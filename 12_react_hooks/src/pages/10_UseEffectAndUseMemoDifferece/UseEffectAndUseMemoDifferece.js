/**
 * UseEffectAndUseMemoDifferece$ - useEffect 和 useMemo 的区别
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/5/24 11:25 上午
 * @LastEditTime: 2021/5/24 11:25 上午
 */
import React, { useEffect, useMemo, useState } from "react";

const nameList = ["apple", "peer", "banana", "lemon"];

const UseEffectAndUseMemoDifferece = (props) => {
  const [price, setPrice] = useState(0);
  const [name, setName] = useState("apple");
  function getProductName() {
    console.log("getProductName触发");
    return name;
  }
  // 只对name响应
  useEffect(() => {
    console.log("name effect 触发");
    getProductName();
  }, [name]);

  // 只对price响应
  useEffect(() => {
    console.log("price effect 触发");
  }, [price]);

  // memo化的getProductName函数
  const memo_getProductName = useMemo(() => {
    console.log("name memo 触发");
    return () => name; // 返回一个函数
  }, [name]);

  return (
    <>
      <p>{name}</p>
      <p>{price}</p>
      {/*<p>普通的name：{getProductName()}</p>*/}
      <p>memo化的：{memo_getProductName()}</p>
      <button onClick={() => setPrice(price + 1)}>价钱+1</button>
      <button
        onClick={() =>
          setName(nameList[(Math.random() * nameList.length) << 0])
        }
      >
        修改名字
      </button>
    </>
  );
};

export default UseEffectAndUseMemoDifferece;
