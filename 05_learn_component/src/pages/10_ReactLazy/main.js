/**
 * test$ - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/1/27 5:53 下午
 * @LastEditTime: 2021/1/27 5:53 下午
 */
import React,  { Suspense } from 'react';

const OtherComponent = React.lazy(() => import('./view'));
function MyComponent() {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <OtherComponent />
            </Suspense>
        </div>
    );
}

export default MyComponent;