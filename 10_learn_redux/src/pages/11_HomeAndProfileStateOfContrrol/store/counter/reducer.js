/**
 * reducer$ - counter reducer 文件
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/3/1 4:30 下午
 * @LastEditTime: 2021/3/1 4:30 下午
 */

import { ADD_ACTION, SUB_COUNTER } from "./counterConstants";

const counterInitialState = {
  counter: 0,
};

const counterReducer = (state = counterInitialState, action) => {
  switch (action.type) {
    case ADD_ACTION:
      return {
        ...state,
        counter: state.counter + action.payload.num,
      };
    case SUB_COUNTER:
      return {
        ...state,
        counter: state.counter - action.payload.num,
      };
    default:
      return state;
  }
};

export { counterReducer };
