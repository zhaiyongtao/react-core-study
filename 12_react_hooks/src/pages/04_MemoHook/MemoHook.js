/**
 * MemoHook$ - useMemo 进行性能优化
 * 1）useMemo返回的也是一个 memoized（记忆的） 值；
 * 2）在依赖不变的情况下，多次定义的时候，返回的值是相同的；
 * useCallback(fn, deps) 相当于 useMemo(() => fn, deps)。
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/3/11 5:40 下午
 * @LastEditTime: 2021/3/11 5:40 下午
 */
import React, {useState,useMemo} from 'react';

const calcNum = (count) => {
    let total = 0;
    for (let i = 0; i < count; i++) {
        total += i;
    }
    console.log("计算一遍");
    return total
}


// function MemoHook(props) {
//     const [count, setCount] = useState(0)
//     const [login, setLogin] = useState(true)
//     const total = calcNum(count); // login 的变话也会让程序重新执行，这样就出现了性能损耗
//     return (
//         <div>
//             <h2>数字之和{total}</h2>
//             <button onClick={e => setCount(count + 1)}>+1</button>
//             {login && <h2>zyt</h2>}
//             <button onClick={e => setLogin(!login)}>切换</button>
//         </div>
//     );
// }

function MemoHook(props) {
    const [count, setCount] = useState(0)
    const [login, setLogin] = useState(true)
    const total = useMemo(() => calcNum(count),[count]) // 这样的话只会根据依赖项count发生变化之后才会执行
    return (
        <div>
            <h2>数字之和{total}</h2>
            <button onClick={e => setCount(count + 1)}>+1</button>
            {login && <h2>zyt</h2>}
            <button onClick={e => setLogin(!login)}>切换</button>
        </div>
    );
}


export default MemoHook;