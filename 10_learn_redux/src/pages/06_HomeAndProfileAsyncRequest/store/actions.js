/**
 * actionCreators.js$ - action构造器文件
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/2/23 2:11 下午
 * @LastEditTime: 2021/2/23 2:11 下午
 */
import {ADD_ACTION, CHANGE_BANNER, CHANGE_RECOMMEND, SUB_COUNTER} from "./constants";

const addAction = (num) => {
    return {
        type: ADD_ACTION,
        payload: {
            num,
        }
    }
}

const subCounter = (num) => {
    return {
        type: SUB_COUNTER,
        payload: {
            num
        }
    }
}

const changeBannersAction = (banners) => ({
    type: CHANGE_BANNER,
    payload: {
        banners
    }
})

const changeRecommendsAction = (recommends) => (
    {
        type: CHANGE_RECOMMEND,
        payload: {
            recommends
        }
    }
)

export {
    addAction,
    subCounter,
    changeBannersAction,
    changeRecommendsAction
}

