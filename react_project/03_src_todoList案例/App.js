import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'
export default class App extends Component {
  //状态在哪里，用于操作状态的方法就在那里
  state = {
    todos: [
      {
        id: '001',
        name: '吃饭',
        done: true
      },
      {
        id: '002',
        name: '打代码',
        done: false
      },
      {
        id: '003',
        name: '睡觉',
        done: true
      }

    ]
  }
  //addTodo用于添加一个todo，接收的参数是todo对象
  addTodo = (todoObj) => {
    //获取源todos 
    const { todos } = this.state
    //追加一个todos
    const newTodos = [todoObj, ...todos]
    //更新状态
    this.setState({ todos: newTodos })
  }
  //用于勾选、取消勾选Todo
  updateTodo = (id, done) => {
    const { todos } = this.state
    //匹配数据
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id)
        return {
          ...todoObj,
          done
        }
      else
        return todoObj
    })
    this.setState({
      todos: newTodos
    })
  }

  //删除todo
  deleteTodo = (id) => {

    const { todos } = this.state
    //删除指定id的todos
    const newTodos = todos.filter((item) => item.id !== id)
    //更新状态
    this.setState({
      todos: newTodos
    })
  }


  //全选
  checkAllTodo = (done) => {
    const { todos } = this.state
    const newTodos = todos.map((todoObj) => {
      return {
        ...todoObj, done
      }
    })
    this.setState({
      todos: newTodos
    })
  }

  //清楚所有已经完成的
  clearDone = () => {
    const { todos } = this.state
    const todosNew = todos.filter((item) => !item.done)
    this.setState({
      todos: todosNew
    })
  }
  render () {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearDone={this.clearDone} />
        </div>
      </div>
    )
  }
}
