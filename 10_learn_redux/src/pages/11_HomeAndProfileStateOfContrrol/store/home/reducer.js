/**
 * reducer$ - home reducer 文件
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/3/1 4:36 下午
 * @LastEditTime: 2021/3/1 4:36 下午
 */

import {
  CHANGE_BANNERS_ACTION,
  CHANGE_RECOMMENDS_ACTION,
} from "./homeConstant";

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

export { homeDataReducer };
