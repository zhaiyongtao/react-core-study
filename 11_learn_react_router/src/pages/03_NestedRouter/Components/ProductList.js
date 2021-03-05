/**
 * ProductList$ - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/3/5 5:00 下午
 * @LastEditTime: 2021/3/5 5:00 下午
 */
import React from "react";

function ProductList(props) {
  const productList = [
    {
      num: 1,
      name: "苹果",
    },
    {
      num: 2,
      name: "香蕉",
    },
    {
      num: 3,
      name: "橘子",
    },
    {
      num: 4,
      name: "橙子",
    },
  ];
  return (
    <div>
      <ul>
        {productList.map((item) => (
          <li key={item.num}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
