import {useEffect} from 'react'
function useLoggingLife (cpnName) {
    useEffect(() => {
        console.log(`${cpnName} 组件被创建`)
        return ()  => {
            console.log(`${cpnName} 组件被销毁`)
        }
    })
}
export default useLoggingLife