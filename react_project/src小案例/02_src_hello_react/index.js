//入口文件


//引入react核心库
import React from 'react'
//引入ReactDom
import ReactDOM from 'react-dom/client';
//引入App
import App from './App.js'

//渲染APP组件

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 开启严格模式，能帮你检测代码不合理的地方
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// import React, { Component } from './module.js'
// console.log(React, 'React');
// // const { Component } = React
// console.log(new Component());