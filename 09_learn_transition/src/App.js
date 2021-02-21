import CssTransition from './pages/01_CSSTransition/CSSTransition'
import SwitchTransitions from "./pages/02_SwitchTransition/SwitchTransition";
import TransitionGroups from "./pages/03_TransitionGroup/TransitionGroup";

function App() {
  return (
    <div className="App">
      {/*<CssTransition />*/}
      {/*  <SwitchTransitions/>*/}
      <TransitionGroups />
    </div>
  );
}

export default App;
