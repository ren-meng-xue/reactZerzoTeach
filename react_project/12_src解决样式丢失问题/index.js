//引入react核心库
import React from "react";
//引入ReactDom
import ReactDOM from 'react-dom/client';
//引入App
import App from './App.js'
import { BrowserRouter, HashRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 开启严格模式，能帮你检测代码不合理的地方
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
