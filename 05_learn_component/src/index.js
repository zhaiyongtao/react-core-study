import React from 'react';
import ReactDOM from 'react-dom';
import ComponentsNest from './pages/FatherAndSonConnect/ComponentsNest'
import ClassComponents from "./pages/FatherAndSonConnect/ClassComponents";

ReactDOM.render(
    <React.StrictMode>
        <ComponentsNest/>
        <ClassComponents />
    </React.StrictMode>,
    document.getElementById('root')
);

