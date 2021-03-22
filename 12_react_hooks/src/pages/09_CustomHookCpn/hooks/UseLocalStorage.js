/**
 * UseLocalStorage$ - localStorage 自定义hook
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/3/22 4:26 下午
 * @LastEditTime: 2021/3/22 4:26 下午
 */

import { useState, useEffect } from "react";

function useLocalStorage(key) {
  const [data, setData] = useState(() =>
    JSON.parse(window.localStorage.getItem(key) || "zyt测试")
  );

  useEffect(() => {
    window.localStorage.setItem("name", JSON.stringify(data));
  }, [data]);

  return [data, setData];
}

export default useLocalStorage;
