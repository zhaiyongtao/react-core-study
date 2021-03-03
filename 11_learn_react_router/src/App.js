import "./App.css";
// import LinkRouter from "./pages/01_ReactRouterDom/LinkRouter";
// import NavLinkRouter from "./pages/01_ReactRouterDom/NavLinkRouter";
import NavLinkRouterNoSwitch from "./pages/01_ReactRouterDom/NavLinkRouterNoSwitch";
// import NavLinkRouterWithSwitch from "./pages/01_ReactRouterDom/NavLinkRouterWithSwitch";
function App() {
  return (
    <div className="App">
      {/*<NavLinkRouterWithSwitch />*/}
      <NavLinkRouterNoSwitch />
    </div>
  );
}

export default App;
