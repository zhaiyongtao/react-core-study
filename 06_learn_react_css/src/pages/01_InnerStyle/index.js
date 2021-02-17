// 内联样式

import React, {PureComponent} from 'react';

class InnerStyle extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            titleColor: 'red'
        }
    }

    render() {
        return (
            <div>
                <h2 style={
                    {
                        color: this.state.titleColor,
                        fontSize: '20px'
                    }
                }>InnerStyle标题</h2>
                <p style={
                    {
                        color: "green",
                        textDecoration: "underline"
                    }
                }>InnerStyle描述</p>
            </div>
        );
    }
}


export default InnerStyle;