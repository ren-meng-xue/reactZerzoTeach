import React, { Component } from 'react'
import './index.css'
import PubSub from 'pubsub-js'
export default class List extends Component {
  state = {
    users: [],//初始化状态，users初始值为数组
    isFirst: true,//是否为第一次打开页面
    isLoading: false,//标识是否处于加载中
    err: ''//存储请求相关的错误信息
  }
  //初始化页面，订阅
  componentDidMount () {
    this.token = PubSub.subscribe('atguigu', (_, stateObj) => {
      this.setState(stateObj)
    })
  }
  componentWillUnmount () {
    PubSub.unsubscribe(this.token)
  }
  render () {
    const { users, isFirst, isLoading, err } = this.state
    return (
      <div className="row">
        {
          isFirst ? <h2>输入关键字，随后点击搜索</h2> :
            isLoading ? <h2>Loading....</h2> : err ? <h2 style={{ color: 'red' }}>{err}</h2> :
              users.map((item) => {
                return (
                  <div className="card" key={item.id} >
                    <a href={item.html_url} target="_blank" rel="noreferrer">
                      <img src={item.avatar_url} style={{ width: '100px' }} alt='img' />
                    </a>
                    <p className="card-text">{item.login}</p>
                  </div>
                )
              })
        }
      </div>
    )
  }
}
