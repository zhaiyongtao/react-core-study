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

const homeDataInitialState = {
  banners: [],
  recommends: [],
};

const homeDataReducer = (state = homeDataInitialState, action) => {
  switch (action.type) {
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

const initialState = {};

const reducer = (state = initialState, action) => {
  return {
    counterInfo: counterReducer(state.counterInfo, action),
    homeInfo: homeDataReducer(state.homeInfo, action),
  };
};
export default reducer;
