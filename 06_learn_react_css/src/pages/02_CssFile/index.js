// 普通的css 的文件

import React, {PureComponent} from 'react';
import './index.css'
class CssFile extends PureComponent {
    render() {
        return (
            <div>
                <h2 className="title">CssFile的title</h2>
            </div>
        );
    }
}


export default CssFile;