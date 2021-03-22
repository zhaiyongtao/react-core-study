/**
 * CustomScrollPositionHook$ - 获取滑动距离
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/3/17 11:08 上午
 * @LastEditTime: 2021/3/17 11:08 上午
 */
import React, { useState, useEffect } from "react";
import useScrollPosition from "../hooks/UseScrollPosition";

function CustomScrollPositionHook(props) {
  // const [scrollPositon, setScrollPositon] = useState(0);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollPositon(window.scrollY);
  //   };
  //   document.addEventListener("scroll", handleScroll);
  //
  //   return () => {
  //     document.removeEventListener("scroll", handleScroll);
  //   };
  // });
  return (
    <div style={{ padding: "1000px", border: "1px" }}>
      <h2 style={{ position: "fixed", top: 0, left: 0 }}>
        {/*CustomScrollPositionHook: {scrollPositon}*/}
        CustomScrollPositionHook: {useScrollPosition()}
      </h2>
    </div>
  );
}

export default CustomScrollPositionHook;
