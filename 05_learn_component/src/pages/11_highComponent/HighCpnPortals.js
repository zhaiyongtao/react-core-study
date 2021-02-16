import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';

class Modal extends PureComponent {

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            document.getElementById("modal")
        )
    }
}


class HighCpnPortals extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            modals:[]
        }
    }
    render() {
        return (
            <div>
                <Modal>
                    <h2>我是标题</h2>
                </Modal>

                {
                    this.state.modals.map((item) => item)
                }
                <button onClick={e=>{this.handleModal(e)}}> 点击打开</button>
            </div>
        );
    }

    handleModal = (e) =>{
        let newModals = [];
        newModals.push ( ReactDOM.createPortal(
            <h2>我是标题2</h2>,
            document.getElementById("modal")
        ))
        this.setState({
            modals: newModals
        })

    }
}


export default HighCpnPortals;