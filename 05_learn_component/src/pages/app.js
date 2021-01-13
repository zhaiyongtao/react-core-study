import React, {Component} from "react";
// import ComponentsNest from './FatherAndSonConnect/ComponentsNest'
// import ClassComponents from "./FatherAndSonConnect/ClassComponents";
// import LifeCircle from "./05_lifeCricle";
// import SonPassValueToParent from "./06_SonPassValueToParent";
// import LayoutPractice from "./06_SonPassValueToParent/LayoutPractice";
import ReactSlot from "./06_SonPassValueToParent/ReactSlot";
class App extends Component {
    render() {
        return (
            <>
                <ReactSlot/>
            </>
        )
    }
}

export default App;