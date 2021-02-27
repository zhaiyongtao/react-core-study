/**
 * index$ - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/2/23 2:11 下午
 * @LastEditTime: 2021/2/23 2:11 下午
 */

import { createStore } from "redux";
import reducer from "./reducer";
import outputActionLog from "../utils/dispatchThunk";

const store = createStore(reducer);

outputActionLog(store);
export default store;
