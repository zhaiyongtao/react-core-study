import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import storeContext from '../src/pages/04_HomeAndProfileContextConnect/context'
import store from "./pages/04_HomeAndProfileContextConnect/store";

ReactDOM.render(
  <storeContext.Provider value={store}>
    <App />
  </storeContext.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
