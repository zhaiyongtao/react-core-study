import "./App.css";
// import LinkRouter from "./pages/01_ReactRouterDom/LinkRouter";
// import NavLinkRouter from "./pages/01_ReactRouterDom/NavLinkRouter";
// import NavLinkRouterNoSwitch from "./pages/01_ReactRouterDom/NavLinkRouterNoSwitch";
// import Router from "./pages/02_RedirectRouter/router";
import NestedRouter from "./pages/03_NestedRouter/NestedRouter";
// import NavLinkRouterWithSwitch from "./pages/01_ReactRouterDom/NavLinkRouterWithSwitch";
function App() {
  return (
    <div className="App">
      {/*<NavLinkRouterWithSwitch />*/}
      {/*<NavLinkRouterNoSwitch />*/}
      {/*<Router />*/}
      <NestedRouter />
    </div>
  );
}

export default App;
