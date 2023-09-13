import React, { Component } from 'react'
import Detail from './Detail'
import { Link, Route } from 'react-router-dom'
export default class Message extends Component {
  state = {
    messageArr: [
      { id: '01', title: '消息1' },
      { id: '02', title: '消息2' },
      { id: '03', title: '消息3' },

    ]
  }
  replaceShow = (id, title) => {
    //replace跳转+携带params参数
    // this.props.history.replace(`/home/message/detail/${id}/${title}`)
    //replace跳转+携带search参数
    this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)

  }
  pushShow = (id, title) => {
    //push+携带params参数
    // this.props.history.push(`/home/message/detail/${id}/${title}`)
    //push+携带search参数
    this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)
  }
  render () {
    return (
      <div>
        <ul>
          {
            this.state.messageArr.map((item) => {
              return (
                <li key={item.id}>
                  {/**向路由组件传递params参数 */}
                  {/** <Link to={`/home/message/detail/${item.id}/${item.title}`}>
                    {item.title}
                  </Link> */}
                  {/**向路由组件传递search参数 */}
                  <Link to={`/home/message/detail/?id=${item.id}&title=${item.title}`}>
                    {item.title}
                  </Link>

                  {/**向路由组件传递state参数 */}
                  {/** <Link to={{
                    pathname: '/home/message/detail', state: {
                      id: item.id,
                      title: item.title
                    }
                  }}>
                    {item.title}
                  </Link> */}
                  <button onClick={() => this.pushShow(item.id, item.title)}>push查看</button>
                  <button onClick={() => this.replaceShow(item.id, item.title)}>Replace查看</button>
                </li>
              )
            })
          }
        </ul>
        <hr />
        {/**声明接收params参数 */}
        {/**    <Route path='/home/message/detail/:id/:title' component={Detail} />
 */}
        {/**search参数无需声明接收，正常注册路由即可 */}
        <Route path='/home/message/detail' component={Detail} />


        {/**state参数无需声明接收，正常注册路由即可 */}
        {/** <Route path='/home/message/detail' component={Detail} /> */}
      </div>
    )
  }
}
