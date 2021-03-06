/**
 * ProductMessage$ - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/3/5 5:03 下午
 * @LastEditTime: 2021/3/5 5:03 下午
 */

import React from "react";

function ProductMessage(props) {
  const productMessageList = [
    {
      num: 1,
      message: "how are u?",
    },
    {
      num: 2,
      message: "Fine, thanks",
    },
    {
      num: 3,
      message: "and u?",
    },
    {
      num: 4,
      message: "Me too",
    },
  ];
  return (
    <div>
      <ul>
        {productMessageList.map((item) => (
          <li key={item.num}>{item.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductMessage;
