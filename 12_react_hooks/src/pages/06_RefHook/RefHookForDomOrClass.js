/**
 * 使用useRef 引入DOM 或者引入一个组件（这个组件必须是class组件因为函数式组件不存在实例），
 * useRef 返回的是一个ref对象,对象中包含Ref属性
 */
import React, {useRef, PureComponent} from 'react';

function RefHookForDomOrClass(props) {
    const inputRef = useRef();
    const titleRef = useRef();
    const classRef = useRef();
    const handleInputFocusAndChangeTitle = () => {
        titleRef.current.innerHTML = "我是修改后的内容";
        inputRef.current.focus();
        console.info(classRef) // 返回的是class组件的实例
        // {current: RefHookForClass,
        //     context: {},
        //     props: {name: "zyt"},
        //     refs: {},
        //     state: null,
        //         updater: {isMounted: ƒ, enqueueSetState: ƒ, enqueueReplaceState: ƒ, enqueueForceUpdate: ƒ},
        //     _reactInternalInstance: {_processChildContext: ƒ},
        //     _reactInternals: FiberNode {tag: 1, key: null, stateNode: RefHookForClass, elementType: ƒ, type: ƒ, …}
        //     isMounted: (...),
        //     replaceState: (...),
        //     __proto__: PureComponent,
        //         __proto__: Object}
    }
    return (
        <div>
            <h2 ref={titleRef}>默认内容</h2>
            <input type="text" ref={inputRef}/>
            <RefHookForClass ref={classRef} name="zyt"/>
            <button onClick={() => handleInputFocusAndChangeTitle()}>focus Input</button>
        </div>
    );
}


class RefHookForClass extends PureComponent {

    render() {
        return (
            <div>
                <h2>class组件-{this.props.name}</h2>
            </div>
        );
    }
}


export default RefHookForDomOrClass;
