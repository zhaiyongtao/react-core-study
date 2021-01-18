import React, {Component, memo, PureComponent} from 'react';

function Header() {
    console.log("Header Render 被调用");

    return (
        <div>Header</div>
    )
}

const Footer = memo(()=> {
    console.log("Footer Render 被调用");

    return (
        <div>footer</div>
    )
})

function Banner() {
    console.log("Banner Render 被调用");
    return <div>Banner</div>
}

function ProductList() {
    console.log("ProductList Render 被调用");
    return (
        <ul>
            <li>商品1</li>
            <li>商品2</li>
            <li>商品3</li>
            <li>商品4</li>
            <li>商品5</li>
        </ul>
    )
}


class Main extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false
    }

    render() {
        console.log("Main Render 被调用");
        return (
            <div>
                <Banner/>
                <ProductList/>
            </div>
        )
    }
}


class PartRenderComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1
        }
    }
    render() {
        return (
            <div>
                <h2>当前计数: {this.state.counter}</h2>
                <button onClick={e => this.increment()}>+1</button>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        );
    }

    increment() {
        this.setState({
            counter: this.state.counter + 1
        })
    }
}

export default PartRenderComponent;
