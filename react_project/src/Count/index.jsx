

//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'

//引入action
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action'

import React, { Component } from 'react'

class Count extends Component {

  //加法
  increment = () => {

    //获取用户输入的内容
    const { value } = this.selectNumber
    this.props.jia(value * 1)
    //通知redux调用
  }
  // 减法
  decrement = () => {
    const { value } = this.selectNumber
    this.props.jian(value * 1)

  }
  //奇数再加
  incrementIfOdd = () => {
    const { value } = this.selectNumber
    if (this.props.count % 2 !== 0) {
      this.props.jia(value * 1)
    }

  }
  //异步加
  incrementAsync = () => {
    const { value } = this.selectNumber
    this.props.jianAsync(value * 1, 500)

  }
  componentDidMount() {
    //检测redux中状态的变化，只要变化就调用render

  }
  render() {
    return (
      <div>
        <h1>当前求和{this.props.count}</h1>
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



// b函数返回的对象中的key就作为传递给UI组件props中的key，value就作为传递给UI组件props的value--操作状态的方法
export default connect(
  state => ({ count: state })
  ,
  //mapDispatchToProps的一般写法
  // dispatch =>
  // ({
  //   jia: number => dispatch(createIncrementAction(number)),
  //   jian: number => dispatch(createDecrementAction(number)),
  //   jianAsync: number => dispatch(createIncrementAsyncAction(number)),
  // })

  // mapDispatchToProps的简写
  {
    jia: createIncrementAction,
    jian: createDecrementAction,
    jianAsync: createIncrementAsyncAction
  }
)(Count)

