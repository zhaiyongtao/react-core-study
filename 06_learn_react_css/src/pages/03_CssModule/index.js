import React, {PureComponent} from 'react';
import styles from './index.module.css';

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