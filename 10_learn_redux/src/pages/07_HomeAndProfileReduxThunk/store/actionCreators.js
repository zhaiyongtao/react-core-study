/**
 * actionCreators.js$ - action构造器文件
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/2/23 2:11 下午
 * @LastEditTime: 2021/2/23 2:11 下午
 */
import {
  ADD_ACTION,
  CHANGE_BANNER,
  CHANGE_RECOMMEND,
  SUB_COUNTER,
} from "./constants";
import axios from "axios";

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
  type: CHANGE_BANNER,
  payload: {
    banners,
  },
});

const changeRecommendsAction = (recommends) => ({
  type: CHANGE_RECOMMEND,
  payload: {
    recommends,
  },
});

// 返回的是一个函数
const getHomeMultidataAction = () => {
  return (dispatch, state) => {
    axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
      const data = res.data.data;
      dispatch(changeBannersAction(data.banner.list));
      dispatch(changeRecommendsAction(data.recommend.list));
    });
  };
};

export {
  addAction,
  subCounter,
  changeBannersAction,
  changeRecommendsAction,
  getHomeMultidataAction,
};
