/**
 * index$ - store
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/2/23 2:11 下午
 * @LastEditTime: 2021/2/23 2:11 下午
 */

import {createStore, applyMiddleware} from 'redux'
import reducer from "./reducer";
import thunkMiddleware from 'redux-thunk';

const thunkEnhancer = applyMiddleware(thunkMiddleware)
const store = createStore(reducer, thunkEnhancer)

export default store