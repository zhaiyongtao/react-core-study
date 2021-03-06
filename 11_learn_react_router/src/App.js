import "./App.css";
// import StateAndSearchParamsRouter from "./pages/05_ParamsRouter/StateAndSearchParamsRouter";
import NavlinkObjectParamsRouter from "./pages/05_ParamsRouter/NavlinkObjectParamsRouter";
// import LinkRouter from "./pages/01_ReactRouterDom/LinkRouter";
// import NavLinkRouter from "./pages/01_ReactRouterDom/NavLinkRouter";
// import NavLinkRouterNoSwitch from "./pages/01_ReactRouterDom/NavLinkRouterNoSwitch";
// import Router from "./pages/02_RedirectRouter/router";
// import NestedRouter from "./pages/03_NestedRouter/NestedRouter";
// import HistoryRouter from "./pages/04_HistoryRouter/HistoryRouter";
// import MatchParamsRouter from "./pages/05_ParamsRouter/MatchParamsRouter";
// import NavLinkRouterWithSwitch from "./pages/01_ReactRouterDom/NavLinkRouterWithSwitch";
function App() {
  return (
    <div className="App">
      {/*<NavLinkRouterWithSwitch />*/}
      {/*<NavLinkRouterNoSwitch />*/}
      {/*<Router />*/}
      {/*<NestedRouter />*/}
      {/*<HistoryRouter />*/}
      {/*<MatchParamsRouter />*/}
      <NavlinkObjectParamsRouter />
    </div>
  );
}

export default App;
