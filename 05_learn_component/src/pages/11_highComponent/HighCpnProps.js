import React, {Component} from 'react';

function enhanceProps (WrapperComponent, otherProps) {
    return (props) => {
            return <WrapperComponent {...props} {...otherProps} />
        }
    }


class Header  extends Component {
    render() {
        const { name, age , height} = this.props;
        return <h2>Header {name} {age} {height}</h2>
    }
}
const NewHeader =  enhanceProps (Header, {height: 1.88})

class HighCpnProps extends Component {
    render() {
        return (
            <>
                <NewHeader name={"zyt"} age={18} />
            </>
        )
    }
}

export default HighCpnProps;