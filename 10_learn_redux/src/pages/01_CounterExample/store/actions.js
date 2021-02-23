/**
 * actionCreators.js$ - Action集合
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/2/22 5:22 下午
 * @LastEditTime: 2021/2/22 5:22 下午
 */
import {ADD_NUMBER, SUB_NUMBER} from "./constant";

export const addNumber = (num) => ({
    type: ADD_NUMBER,
    payload: {
        num
    }
})

export const subNumber = (num) => ({
    type: SUB_NUMBER,
    payload: {
        num
    }
})

