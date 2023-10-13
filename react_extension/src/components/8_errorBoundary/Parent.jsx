import React, { Component } from 'react'
import Child from './Child'
export default class Parent extends Component {

  state = {
    hasError: '',//用于标识字组件是否产生错误
  }
  //当Parent的子组件出现报错的时候，会触发getDerivedStateFromError调用，并携带错误信息
  static getDerivedStateFromError(error) {
    console.log(error, '@@@@');//这个错误边界只使用于生产环境
    return {
      hasError: error,
    }
  }
  render() {
    return (
      <div>
        <h2>Parent</h2>
        {
          this.state.hasError ? <h2>网络不稳定</h2> : <Child />
        }
      </div>
    )
  }
}
