import React, {Component} from 'react';

function highComponent (WrapperComponent) {
    return class extends Component {
        render() {
            return <WrapperComponent />
        }
    }
}

class HighCpnBaseUse extends Component {

    render() {
        return (
            <div>
                高级组件
            </div>
        );
    }
}

export default highComponent(HighCpnBaseUse);