import React, {Component} from "react";
// import ComponentsNest from './FatherAndSonConnect/ComponentsNest'
// import ClassComponents from "./FatherAndSonConnect/ClassComponents";
// import LifeCircle from "./05_lifeCricle";
// import SonPassValueToParent from "./06_SonPassValueToParent";
// import LayoutPractice from "./06_SonPassValueToParent/LayoutPractice";
// import ReactSlot from "./06_SonPassValueToParent/ReactSlot";
// import ReactContext from './07_ReactContex'
// import SetStateBase from "./08_SetStateMethod/SetStateBase";

// import SynchronousSetState from "./08_SetStateMethod/SynchronousSetState";

import PartRenderComponent from "./08_SetStateMethod/PartRenderComponent"

class App extends Component {
    render() {
        return (
            <>
                <PartRenderComponent/>
            </>
        )
    }
}

export default App;