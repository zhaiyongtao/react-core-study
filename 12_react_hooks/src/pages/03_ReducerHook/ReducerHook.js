// 使用场景： 1） 针对与state有很多操作
//          2) 修改当前的state的时候需要用到之前的state
/**
 * useReducer的三个参数
 * 1、state: 状态
 * 2、dispatch方法
 * 3、(prevState)=>{}
 */
import React, { useReducer, useState } from "react";
import counterReducer from "./reducers";

function ReducerHook(props) {
  const [state, dispatch] = useReducer(counterReducer, { counter: 0 });
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h2>累计计数： {state.counter}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>+1</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button
        onClick={() =>
          dispatch({ type: "addNumber", payload: { number: number } })
        }
      >
        +{number}
      </button>
    </div>
  );
}

export default ReducerHook;
