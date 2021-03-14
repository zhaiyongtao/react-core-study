import React, {useState,useLayoutEffect} from 'react';

/**
 * useEffect会在渲染的内容更新到DOM上后执行，不会阻塞DOM的更新；setCount => 重新渲染 => DOM更新 => useEffect
 * useLayoutEffect会在渲染的内容更新到DOM上之前执行，会阻塞DOM的更新； setCount => 重新渲染 => useLayoutEffect => DOM更新
 */
function UseLayoutEffectHook(props) {
    const [count, setCount] = useState(0);
    useLayoutEffect(() =>{
        if (count === 0) {
            setCount(Math.random() * 200)
        }
    }, [count])
    return (
        <div>
            {/*会出现0 和其他数字之间不停闪烁的现象*/}
            <h2 >当前计数：{count}</h2>
            <button onClick={() => setCount(0)}>修改count</button>
        </div>
    );}

export default UseLayoutEffectHook;