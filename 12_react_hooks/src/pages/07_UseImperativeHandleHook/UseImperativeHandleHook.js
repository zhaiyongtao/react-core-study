import React, {useRef, forwardRef, useImperativeHandle} from 'react';

const InputCpn = forwardRef((props, ref) => {
    const inputRef = useRef()
    //这样我的子组件只需要暴露我想暴露的
    useImperativeHandle(ref, ()=> {
        return {
            focus: () => {
                inputRef.current.focus()
            },
            printHello : () => {
              console.log("hello")
            }
        }
    }, [inputRef.current])

    return (
        <div>
            <input type="text" ref={inputRef}/>
        </div>

    )

})


function UseImperativeHandleHook(props) {
    const inputRef = useRef()
    const operationFn = () => {
        inputRef.current.focus();
        inputRef.current.printHello(); // 控制台输出： hello
    }
    return (
        <div>
            <InputCpn ref={inputRef} />
            <button onClick={() => {
                operationFn()
            }}>Operation</button>
        </div>
    );
}

export default UseImperativeHandleHook;