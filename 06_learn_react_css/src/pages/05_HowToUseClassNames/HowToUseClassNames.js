import React, {PureComponent} from 'react';
import classNames from 'classnames';
class HowToUseClassNames extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isActive: true
        }
    }
    render() {
        const {isActive} = this.state;
        return (
            <div>
                 {/*未使用classnames*/}
                {/*<h2 className="title active">我是标题1</h2>*/}
                <h2 className={"title " + (isActive ? "active": "")}>我是标题1</h2>
                {/*<h2 className="title active">我是标题2</h2>*/}
                <h2 className={["title", (isActive ? "active": "")].join(" ")}>我是标题2</h2>
                {/*<h2 className="title active">我是标题3</h2>*/}
                <h2 className={classNames("title","active")}>我是标题3</h2>
            </div>
        );
    }
}

export default HowToUseClassNames;