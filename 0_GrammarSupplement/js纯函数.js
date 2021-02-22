/**
 * js$ - 纯函数
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/2/22 10:49 上午
 * @LastEditTime: 2021/2/22 10:49 上午
 */

// 相同的输入产生相同的输出
// 函数在执行过程中，不能产生副作用；
// 正例
function sum1 (num1, num2) {
    return num1 + num2
}

sum1(5, 7)

// 反例
let foo = 5;
function sum2(num) {
    return foo + num
}
sum2(3) // => 8

foo = 10;
sum2(3) // => 13

// 输入的变量一直是3 但是却应为 let 声明的变量的值改变输出结果发生了改变，所以不是纯函数

// 修正反例

const bar = 5
function sum3 (num) {
    return bar + num
}
sum3(3) // => 8
// const 声明的是常量，不能发生改变，所以这个时候sum2 是纯函数
// 方法依赖的变量在程序的执行过程中是否会发生改变

