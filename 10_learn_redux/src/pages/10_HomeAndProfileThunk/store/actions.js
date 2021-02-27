/**
 * actionCreators.js$ - action
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/2/23 2:11 下午
 * @LastEditTime: 2021/2/23 2:11 下午
 */
import { ADD_ACTION, SUB_COUNTER } from "./constants";

const addAction = (num) => {
  return {
    type: ADD_ACTION,
    payload: {
      num,
    },
  };
};

const subCounter = (num) => {
  return {
    type: SUB_COUNTER,
    payload: {
      num,
    },
  };
};

function getData(dispatch) {
  setTimeout(() => {
    dispatch(subCounter(10));
  }, 1000);
}

export { addAction, subCounter, getData };
