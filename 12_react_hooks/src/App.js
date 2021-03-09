// import ClassCounter from "./pages/01_BaseUseOfHooks/ClassCounter";
// import HooksCounter from "./pages/01_BaseUseOfHooks/HooksCounter";

// import ComplexDataHooks from "./pages/01_BaseUseOfHooks/ComplexDataHooks";

// import ClassCounter from "./pages/02_EffectHooks/classCounter";
// import EffectCounter from "./pages/02_EffectHooks/EffectCounter";
// import ClearEffectCpn from "./pages/02_EffectHooks/ClearEffectCpn";
import React, { useState } from "react";
import ContextHook from "./pages/02_EffectHooks/ContextHook/ContextHook";

function App() {
  const [isShow, setIsShow] = useState(true);
  return (
    <div className="App">
      {/*01*/}
      {/*<ClassCounter />*/}
      {/*<HooksCounter />*/}
      {/*<ComplexDataHooks />*/}
      {/*o2*/}
      {/*<ClassCounter />*/}
      {/*<EffectCounter />*/}
      {/*{isShow && <ClearEffectCpn />}*/}
      <ContextHook />
      {/*<button onClick={() => setIsShow(!isShow)}>隐藏dom元素</button>*/}
    </div>
  );
}

export default App;
