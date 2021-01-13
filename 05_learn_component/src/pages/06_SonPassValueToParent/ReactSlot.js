import React, {Component} from 'react'
import './style.css'

class ReactSlot extends Component {
    render() {
        const navLeft = <div>返回</div>;
        const navCenter = <div>购物街</div>;
        const navRight = <div>更多</div>;

        return (
            <>
                <NavBar>
                    <div>
                        返回
                    </div>
                    <div>
                        购物街
                    </div>
                    <div>
                        更多
                    </div>
                </NavBar>
                <PropsNarBar leftSlot={navLeft} centerSlot={navCenter} rightSlot={navRight} />
            </>

        )
    }
}

// props中的children的使用
function NavBar(props) {
    return (
        <div className="nav-bar">
            <div className="item left">
                {props.children[0]}
            </div>
            <div className="item center">
                {props.children[1]}
            </div>
            <div className="item right">
                {props.children[2]}
            </div>
        </div>
    )
}

// props 传值
class PropsNarBar extends Component {
    render() {
        const { leftSlot, centerSlot, rightSlot } = this.props;
        return (
            <div className="nav-bar">
                <div className="item left">{leftSlot}</div>
                <div className="item center">{centerSlot}</div>
                <div className="item right">{rightSlot}</div>
            </div>
        )
    }
}

export default ReactSlot;