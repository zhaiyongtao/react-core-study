import React, {useEffect} from 'react';
import useLoggingLife from "../hooks/UseLoggingLife";

function LogCpnCreateAndDestroyChild (props) {
    useEffect(() => {
        console.log("LogCpnCreateAndDestroyChild 组件被创建");
        return () => {
            console.log("LogCpnCreateAndDestroyChild 组件被销毁")
        }
    },[])
    return (
        <div>
            LogCpnCreateAndDestroyChild
        </div>
    );
}

function LogCpnCreateAndDestroyLastChild (props) {
    useLoggingLife('LogCpnCreateAndDestroyLastChild')
    return (
        <div>
            LogCpnCreateAndDestroyLastChild
        </div>
    );
}

export {LogCpnCreateAndDestroyChild, LogCpnCreateAndDestroyLastChild};