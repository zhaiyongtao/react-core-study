/**
 * actionCreactors$ - home action 生成器
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/3/1 4:32 下午
 * @LastEditTime: 2021/3/1 4:32 下午
 */

import {
  CHANGE_BANNERS_ACTION,
  CHANGE_RECOMMENDS_ACTION,
  FETCH_HOME_MULTIDATA,
} from "./homeConstant";

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

export { changeBannersAction, changeRecommendsAction, fetchHomeMultidata };
