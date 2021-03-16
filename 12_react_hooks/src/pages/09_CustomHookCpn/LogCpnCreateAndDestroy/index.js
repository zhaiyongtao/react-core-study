import React, {useState} from 'react';
import {LogCpnCreateAndDestroyChild, LogCpnCreateAndDestroyLastChild} from "./LogCpnCreateAndDestroyChild";

function LogCpnCreateAndDestroy (props) {
   const [isShow, setIsShow] = useState(true)
    return (
        <div>
            {/*true => LogCpnCreateAndDestroyChild 组件被创建*/}
            {/*false => LogCpnCreateAndDestroyChild 组件被销毁*/}
            {isShow&&<LogCpnCreateAndDestroyChild/>}
            {isShow&&<LogCpnCreateAndDestroyLastChild/>}
            <button onClick={() => setIsShow(!isShow)}>隐藏/显示组件</button>
        </div>
    );
}

export default LogCpnCreateAndDestroy;