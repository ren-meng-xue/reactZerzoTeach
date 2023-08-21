//这个是因为React对象文件里面抛出了Component，在这里根本就不是解构赋值，这个文件里面用到了多种暴露形式
//创建"外壳"组件App
import React, { Component } from 'react';
import Hello from './components/Hello/Hello'
import Welcome from './components/Welcome/Welcome';
// const { Component } = 'React'//这个是从React身上取出来的

//创建并暴露组件
export default class App extends Component {
  render () {
    return (
      <div>
        <Hello />
        <Welcome />
      </div>
    )
  }
}
