/**
 * Link$ - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/3/26 2:33 下午
 * @LastEditTime: 2021/3/26 2:33 下午
 */
import React, { memo } from "react";
import Iframe from "react-iframe";

export default memo(function Link(props) {
  return (
    <>
      <h2>iframe</h2>
      <div style={{ width: "100%" }}>
        <Iframe
          url="http://www.baidu.com"
          position="absolute"
          width="100%"
          id="myId"
          height="100%"
          scrolling={"no"}
        />
      </div>
    </>
  );
});
