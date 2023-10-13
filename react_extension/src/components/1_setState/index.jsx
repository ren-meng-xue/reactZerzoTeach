import React, { Component } from 'react'

export default class Demo extends Component {
  state = {
    count: 0
  }
  addNum = () => {
    /**  this.setState({
        count: this.state.count + 1
      }, () => {
        console.log(this.state.count, '1');
      })
      console.log(this.state.count, '2`'); */

    //函数式的setState
    this.setState((state, props) => {
      return { count: state.count + 1 }

    }, () => {

      console.log(this.state.count, '09');
    })
  }
  render() {
    return (
      <div>
        <h1>当前求和为{this.state.count}</h1>
        <button onClick={this.addNum}>点我➕1</button>
      </div>
    )
  }
}
