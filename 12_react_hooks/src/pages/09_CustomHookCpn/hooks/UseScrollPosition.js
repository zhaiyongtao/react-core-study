/**
 * UseScrollPosition$ - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/3/22 11:26 上午
 * @LastEditTime: 2021/3/22 11:26 上午
 */

import { useState, useEffect } from "react";
function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScrollPosition = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScrollPosition);
    return () => {
      window.removeEventListener("scroll", handleScrollPosition);
    };
  });
  return scrollPosition;
}

export default useScrollPosition;
