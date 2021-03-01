/**
 * index$ - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/2/23 2:11 下午
 * @LastEditTime: 2021/2/23 2:11 下午
 */

import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./reducer";
import createSagaMiddleware from "redux-saga";
import homeAndProfileSaga from "./saga";

// 为了使用Redux-devtools需要定义一个这样的变量，返回值是一个函数
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;

// 定义saga中间件变量
const sagaMiddleware = createSagaMiddleware();

const middlewareEnhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

// 将middlewareEnhancer作为第二个参数传入到createStore中
const store = createStore(reducer, middlewareEnhancer);

// 必须启动saga中间件，并且传入其要监听的generator
sagaMiddleware.run(homeAndProfileSaga);

export default store;
