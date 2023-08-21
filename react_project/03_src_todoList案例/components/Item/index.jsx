import React, { Component } from 'react'
import './index.css'
/**
 * defaultChecked只管第一次上来勾不勾选，以后是能改的
 * checked以后勾选没有效果
 */
export default class Item extends Component {

  state = {
    mouse: false//标识鼠标移入的状态
  }
  //鼠标移入、移出的回调
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag })
    }
  }
  //勾选、取消勾选某一个todo 的回调（使用的是高阶函数）
  handleCheck = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked)
    }
  }
  //响应删除一个Todo的回调(不用高阶函数)
  handleDelete = (id) => {
    if (window.confirm('确定要删除吗')) {

      this.props.deleteTodo(id)
    }

  }
  render () {
    const { id, name, done } = this.props
    const { mouse } = this.state
    return (
      <li style={{ backgroundColor: mouse ? '#ddd' : '#fff' }} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)} >
        <label>
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" onClick={() => this.handleDelete(id)} style={{ display: mouse ? 'block' : 'none' }}>删除</button>
      </li>
    )
  }
}
