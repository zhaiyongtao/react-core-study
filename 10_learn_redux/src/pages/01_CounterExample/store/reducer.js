/**
 * reducer.js$ - reducer声明文件
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/2/22 5:18 下午
 * @LastEditTime: 2021/2/22 5:18 下午
 */
import {ADD_NUMBER, SUB_NUMBER} from "./constant";


const initialState = {
    counter: 1
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NUMBER:
            return {
                ...state, counter: state.counter + action.payload.num
            }
        case SUB_NUMBER:
            return {
                ...state, counter: state.counter - action.payload.num
            }
        default:
            return state;
    }
}

export default reducer