/**
 * index$ - 路由配置文件
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/3/29 10:40 下午
 * @LastEditTime: 2021/3/29 10:40 下午
 */

import DiscoverMusic from "@/pages/discover-music";
import MyMusic from "@/pages/my-music";
import Friend from "@/pages/friend";

const routes = [
  {
    path: "/",
    exact: true,
    component: DiscoverMusic,
  },
  {
    path: "/my-music",
    component: MyMusic,
  },
  {
    path: "/friend",
    component: Friend,
  },
];

export default routes;
