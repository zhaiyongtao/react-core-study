// saga配置信息

import axios from "axios";
import { takeEvery, all, put, takeLatest } from "@redux-saga/core/effects";
import { FETCH_HOME_MULTIDATA } from "./constants";
import { changeBannersAction, changeRecommendsAction } from "./actionCreators";

// 异步请求方法
function* fetchHomeMultidata(action) {
  console.log(action);
  const res = yield axios.get("http://123.207.32.32:8000/home/multidata");
  const { data } = res.data;
  console.log(data);
  yield all([
    put(changeBannersAction(data.banner.list)),
    put(changeRecommendsAction(data.recommend.list)),
  ]);
}

// saga主要方法
function* homeAndProfileSaga() {
  // 监听单个异步请求action, takeEvery 是监听每一个相同的action动作
  yield takeEvery(FETCH_HOME_MULTIDATA, fetchHomeMultidata);
  // takeLatest 有多个相同的action动作，监听最后一个
  // yield takeLatest(FETCH_HOME_MULTIDATA, fetchHomeMultidata);
  // 监听多个异步请求action
  // yield all([
  //   takeEvery(FETCH_HOME_MULTIDATA, fetchHomeMultidata),
  //     .....
  // ])
}

export default homeAndProfileSaga;
