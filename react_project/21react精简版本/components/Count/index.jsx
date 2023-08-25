import React, { Component } from 'react'
//引入store，用于获取redux中的count的状态
import store from '../../reducex/store'
export default class Count extends Component {
  state = {
    count: 0
  }
  //加法
  increment = () => {
    //获取用户输入的内容
    const { value } = this.selectNumber
    //通知redux调用
    store.dispatch({ type: 'increment', data: value * 1 })
  }
  // 减法
  decrement = () => {
    const { value } = this.selectNumber
    store.dispatch({ type: 'decrement', data: value * 1 })
  }
  //奇数再加
  incrementIfOdd = () => {
    const { value } = this.selectNumber
    const count = store.getState()
    if (count % 2 !== 0) {
      store.dispatch({ type: 'increment', data: value * 1 })
    }
  }
  //异步加
  incrementAsync = () => {
    const { value } = this.selectNumber
    setTimeout(() => {
      store.dispatch({ type: 'increment', data: value * 1 })
    }, 500);
  }
  componentDidMount () {
    //检测redux中状态的变化，只要变化就调用render
    store.subscribe(() => {
      this.setState({
      })
    })
  }
  render () {
    console.log(store);
    return (
      <div>
        <h1>当前求和为：{store.getState()}</h1>
        <select ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;

        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}
