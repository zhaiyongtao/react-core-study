import React, {useState, useEffect} from 'react';

function CommonUseEffect(props) {
    const [count, setCount] = useState(0);
    useEffect(() =>{
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
    );
}

export default CommonUseEffect;