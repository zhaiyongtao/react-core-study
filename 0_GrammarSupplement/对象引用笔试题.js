/**
 * test$ - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/3/9 4:54 下午
 * @LastEditTime: 2021/3/9 4:54 下午
 */

let a = [
  {
    col: 1,
  },
  {
    col: 2,
  },
  {
    col: 3,
  },
];
let b = a.filter((item) => item.col >= 2);
console.log(b);
console.log(a);
b.forEach((item) => {
  item.col = 10;
  a.push(item);
});
console.log(a);

// 引用的是同一个内存空间
// [ { col: 2 }, { col: 3 } ]
//     [ { col: 1 }, { col: 2 }, { col: 3 } ]
//     [ { col: 1 }, { col: 10 }, { col: 10 }, { col: 10 }, { col: 10 } ]
