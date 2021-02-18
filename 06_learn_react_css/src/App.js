
// import InnerStyle from "./pages/01_InnerStyle";
import './App.css'
// import CssInJsProps from "./pages/04_CssInJs/CssInJsProps";
// import CssInJs from "./pages/04_CssInJs/CssInJs";
// import CssFile from "./pages/02_CssFile";
// import Home from "./pages/02_CssFile/Home";
// import CssModule from "./pages/03_CssModule";
// import CssInJsAttrs from "./pages/04_CssInJs/CssInJsAttrs";
// import CssInJsExtends from "./pages/04_CssInJs/CssInJsExtends";
// import CssInJsTheme from "./pages/04_CssInJs/CssInJsTheme";
import HowToUseClassNames from "./pages/05_HowToUseClassNames/HowToUseClassNames";
function App() {
  return (
    <div className="App">
        {/* title 的样式将被CssFile组件的样式覆盖*/}
      <h2 className="title">我是APP的title</h2>
        {/*<CssFile />*/}
        {/*<Home />*/}
        {/*<CssModule />*/}
        {/*<CssInJs/>*/}
        {/*<CssInJsProps/>*/}
        {/*<CssInJsAttrs />*/}
        {/*<CssInJsExtends />*/}
        <HowToUseClassNames />
    </div>
  );
}

export default App;
