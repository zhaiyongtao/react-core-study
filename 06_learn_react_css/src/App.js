
// import InnerStyle from "./pages/01_InnerStyle";
import './App.css'
import CssFile from "./pages/02_CssFile";
import Home from "./pages/02_CssFile/Home";
import CssModule from "./pages/03_CssModule";
function App() {
  return (
    <div className="App">
        {/* title 的样式将被CssFile组件的样式覆盖*/}
      <h2 className="title">我是APP的title</h2>
        <CssFile />
        <Home />
        <CssModule />
    </div>
  );
}

export default App;
