/**
 * reducer.js$ - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/2/23 2:11 下午
 * @LastEditTime: 2021/2/23 2:11 下午
 */
import {
  ADD_ACTION,
  CHANGE_BANNERS_ACTION,
  CHANGE_RECOMMENDS_ACTION,
  SUB_COUNTER,
} from "./constants";

const initialState = {
  counter: 0,
  banners: [],
  recommends: [],
};

const reducer = (state = initialState, action) => {
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
    case CHANGE_BANNERS_ACTION:
      console.log(action.payload);
      return {
        ...state,
        banners: action.payload.banners,
      };
    case CHANGE_RECOMMENDS_ACTION:
      return {
        ...state,
        recommends: action.payload.recommends,
      };
    default:
      return state;
  }
};

export default reducer;
