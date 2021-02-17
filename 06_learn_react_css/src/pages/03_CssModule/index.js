import React, {PureComponent} from 'react';
import styles from './style.module.css';

// 一般使用style.module.css命名，index.module.css命名时需要保证外层文件夹名称与类名相同

class CssModule extends PureComponent {
    constructor(props) {
        super(props);
        // this.state = {
        //     backgroudColor: 'black'
        // }
    }
    render() {
        return (
            <div>
                <h2 className={styles.title} >CssModule的标题</h2>
            </div>
        );
    }
}


export default CssModule;