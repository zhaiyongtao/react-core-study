// ref 转发


import React, {PureComponent, forwardRef} from 'react';

// function Home(props) {
//     return (
//         <div>
//             <h2 ref={props.ref}>Home</h2>
//             <button>点击</button>
//         </div>
//     )
// }
const Home = forwardRef(
    function (props, ref) {
        return (
            <div>
                <h2 ref={ref}>Home</h2>
                <button>点击</button>
            </div>
        )
    }

)

class HighCpnForwardRef extends PureComponent {
    constructor(props) {
        super(props);
        this.titleRef = React.createRef()
    }
    render() {
        return (
            <div>
                <Home ref={this.titleRef} />
                <button onClick={(e) => this.handlePrintRef(e)}>打印Ref</button>
            </div>
        );
    }

    handlePrintRef = (e) => {
        console.log(e)
        console.log(this.titleRef)
    }
}


export default HighCpnForwardRef;