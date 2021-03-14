import React, {PureComponent,useRef, forwardRef} from 'react';

/**
 * 直接暴露给父组件带来的问题是某些情况的不可控；
 * 父组件可以拿到DOM后进行任意的操作
 */

const InputCpn = forwardRef((props, ref) => {
    return (
        <div>
            <input type="text" ref={ref} />
        </div>
    );
})

// class CommonForwardRefAndUseRef extends PureComponent {
//     constructor(props) {
//         super(props);
//         this.inputRef = React.createRef()
//     }
//     render() {
//         return (
//             <div>
//                 <InputCpn ref={this.inputRef} />
//                 <button onClick={() => this.inputRef.current.focus()}>Focus Input</button>
//             </div>
//         );
//     }
// }

const CommonForwardRefAndUseRef = (props) => {
    const inputRef = useRef();
    return (
        <div>
            <InputCpn ref={inputRef} />
            <button onClick={() => inputRef.current.focus()}>Focus Input</button>
        </div>

    )
}


export default CommonForwardRefAndUseRef;