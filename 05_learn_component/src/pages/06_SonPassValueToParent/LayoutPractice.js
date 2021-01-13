import React, {Component} from 'react';
import './style.css'

class LayoutPractice extends Component {
    constructor(props) {
        super(props);
        this.titles = ["流行", "新款", "精选"];
        this.state = {
            currentTitle: "流行",
        }
    }

    changeTitle = (index) => {
        this.setState({
            currentTitle: this.titles[index]
        })
    }

    render() {
        return (
            <>
                <TabControl titles={this.titles} changeTitle={(index) => this.changeTitle(index)}/>
                <h2>{this.state.currentTitle}</h2>
            </>
        )
    }
}

export default LayoutPractice;

class TabControl extends Component {
    constructor(props) {
        super(props);
        this.titles = props.titles;
        this.state = {
            currentIndex: 0
        }
    }

    render() {
        const {currentIndex} = this.state;
        return (
            <div className="tab-control">
                {
                    this.titles.map((item, index) => {
                        return (
                            <div className="tab-item" key={index} onClick={() => this.itemClick(index)}>
                                <span className={"title " + (index === currentIndex ? "active" : "")}>{item}</span>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    itemClick = (index) => {
        this.setState({
            currentIndex: index,
        })
        this.props.changeTitle(index)
    }
}