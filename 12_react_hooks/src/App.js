// import ClassCounter from "./pages/01_BaseUseOfHooks/ClassCounter";
// import HooksCounter from "./pages/01_BaseUseOfHooks/HooksCounter";

// import ComplexDataHooks from "./pages/01_BaseUseOfHooks/ComplexDataHooks";

// import ClassCounter from "./pages/02_EffectHooks/classCounter";
// import EffectCounter from "./pages/02_EffectHooks/EffectCounter";
// import ClearEffectCpn from "./pages/02_EffectHooks/ClearEffectCpn";
import React from "react";
import UseMemoHookInChildrenCpn from "./pages/04_MemoHook/UseMemoHookInChildrenCpn";
// import React, { useState } from "react";
// import ContextHook from "./pages/02_EffectHooks/ContextHook/ContextHook";
// import CallbackHook from "./pages/05_CallbackHook/CallbackHook";
// import MemoHook from "./pages/04_MemoHook/MemoHook";

function App() {
  // const [isShow, setIsShow] = useState(true);
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
      {/*<ContextHook />*/}
      {/*<button onClick={() => setIsShow(!isShow)}>隐藏dom元素</button>*/}
      {/*<CallbackHook />*/}
      {/*<MemoHook />*/}
      <UseMemoHookInChildrenCpn />
    </div>
  );
}

export default App;
