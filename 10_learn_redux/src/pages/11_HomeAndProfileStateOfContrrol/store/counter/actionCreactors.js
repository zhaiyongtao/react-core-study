/**
 * actionCreactors$ -counter action 生成器
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/3/1 4:29 下午
 * @LastEditTime: 2021/3/1 4:29 下午
 */

import { ADD_ACTION, SUB_COUNTER } from "./counterConstants";

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

export { addAction, subCounter };
