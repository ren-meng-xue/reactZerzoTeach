import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import News from './News'
import Message from './Message'
import MyNavLink from '../../components/MyNavLink'
export default class Home extends Component {
  render () {
    return (
      <div>
        <h2>Home组件内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to='/home/news'>News</MyNavLink>
            </li>
            <li>
              <MyNavLink to='/home/message'>Message</MyNavLink>
            </li>
          </ul>
          {
            /**注册路由 */
          }

          <Switch>
            <Route path='/home/news' component={News}></Route>
            <Route path='/home/message' component={Message}></Route>
            <Redirect to='/home/news' />
          </Switch>
        </div>
      </div>
    )
  }
}
