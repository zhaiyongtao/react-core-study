/**
 * useRef可以想象成在ref对象中保存了一个.current的可变盒子；
 * useRef在组件重新渲染时，返回的依然是之前的ref对象，但是current是可以修改的；
 * 关键词：组件重新渲染；之前的ref对象
 */
import React, {useState, useRef, useEffect} from 'react';

function UseRefToSaveSomeValue(props) {
    const [count, setCount] = useState(0);
    const countRef = useRef(count);
    useEffect(() =>{
        countRef.current = count;
    }, [count])
    return (
        <div>
            <h2>前一次的值：{countRef.current}</h2>
            <h2>这一次的值：{count}</h2>
            <button onClick={() => setCount(count + 1)}>count + 1</button>
        </div>
    );
}

export default UseRefToSaveSomeValue;