/**
 * actionCreators.js$ - action
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/2/23 2:11 下午
 * @LastEditTime: 2021/2/23 2:11 下午
 */
import {
  ADD_ACTION,
  CHANGE_BANNERS_ACTION,
  CHANGE_RECOMMENDS_ACTION,
  FETCH_HOME_MULTIDATA,
  SUB_COUNTER,
} from "./constants";

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

const changeBannersAction = (banners) => ({
  type: CHANGE_BANNERS_ACTION,
  payload: {
    banners,
  },
});

const changeRecommendsAction = (recommends) => ({
  type: CHANGE_RECOMMENDS_ACTION,
  payload: {
    recommends,
  },
});

const fetchHomeMultidata = () => ({
  type: FETCH_HOME_MULTIDATA,
});

export {
  addAction,
  subCounter,
  changeBannersAction,
  changeRecommendsAction,
  fetchHomeMultidata,
};
