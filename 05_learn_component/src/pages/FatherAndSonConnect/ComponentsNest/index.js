import React, {Component} from "react";

function Header() {
    return (
        <>
            <h1>Header</h1>
        </>
    )
}

function Main() {
    return (
        <div>
            <Header/>
            <Banner/>
            <ProductionList/>
            <Footer/>
        </div>
    )
}

function Banner() {
    return (
        <div>
            Banner
        </div>
    )
}

function ProductionList() {
    return (
        <ul>
            {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                    return (<li>商品{item}</li>)
                })
            }
        </ul>

    )
}

function Footer() {
    return (
        <h2>
            Footer
        </h2>
    )
}


class ComponentsNest extends Component {
    render() {
        return (
            <Main/>
        )
    }
}

export default ComponentsNest
