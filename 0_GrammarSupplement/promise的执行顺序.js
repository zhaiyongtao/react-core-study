/**
 * promise的执行顺序$ - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/2/25 5:09 下午
 * @LastEditTime: 2021/2/25 5:09 下午
 */

function sleep() {
    var ms = 2000 + new Date().getTime()
    while( new Date() < ms) {}
    console.log('sleep finish')
}
// document.addEventListener('click', function() {
//     console.log('click')
// })

sleep()

// 宿主发起的宏观任务，注意宿主是? 才能能真正的判断出执行顺序
setTimeout(function() {
    console.log('timeout');
}, 0);

// 微观任务
Promise.resolve().then(function() {
    console.log('promise');
});console.log('finish')

