import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createIncrementAction } from '../../redux/actions/count.js'
class Count extends Component {
  add = () => {
    this.props.jiafa(1)
    //通知redux加1
  }
  render() {
    return (
      <div>
        <h2>当前求和为{this.props.he}</h2>
        <button onClick={this.add}>点我加1</button>
      </div>
    )
  }
}
export default connect(
  //映射状态
  state => ({
    he: state
  }), {
  jiafa: createIncrementAction
}
  //映射操作状态的方法
)(Count)