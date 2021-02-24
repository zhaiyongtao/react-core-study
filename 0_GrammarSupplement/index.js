/**
 * index.js$ - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/2/24 3:47 下午
 * @LastEditTime: 2021/2/24 3:47 下午
 */
import Watch from './proxyObjecct.js'

let obj1 = {
    name: 'ss',
    age: 10
}

let obj2 = {
    class: 'ff'
}

let watcher = new Watch(obj1);
let watcher2 = new Watch(obj2);

obj1 = watcher.createProxy();
obj2 = watcher2.createProxy();

watcher.on('read, updated', function () {
    console.log(obj1)
});

watcher2.on('read, updated', function () {
    console.log(obj2)
});

obj1.name
obj2.class