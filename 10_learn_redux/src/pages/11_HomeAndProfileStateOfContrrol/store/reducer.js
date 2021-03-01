/**
 * reducer.js$ - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/2/23 2:11 下午
 * @LastEditTime: 2021/2/23 2:11 下午
 */
import { combineReducers } from "redux";
import { reducer as homeReducer } from "../store/home";
import { reducer as counterReducer } from "../store/counter";

const reducer = combineReducers({
  counterReducer,
  homeReducer,
});
export default reducer;
