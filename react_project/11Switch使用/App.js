import React, { Component } from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import About from './pages/About'//About是路由组件
import Home from './pages/Home'//Home是路由组件
import Header from './components/Header'//一般组件
import MyNavLink from './components/MyNavLink'
import Text from './components/Text'
export default class App extends Component {
  render () {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {
                /**原生html，靠a跳转不同的页面 */
              }
              {
                /**  <a className="list-group-item" href="./about.html">About</a>
                <a className="list-group-item active" href="./home.html">Home</a> */
              }
              {/**在React中靠路由链接实现切换组件 编写路由 */}
              <MyNavLink to='/about'>About</MyNavLink>
              <MyNavLink to='/home'>Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {
                  /**注册路由 */
                }
                <Switch>
                  <Route path='/about' component={About}></Route>
                  <Route path='/home' component={Text}></Route>
                  <Route path='/home' component={Home}></Route>

                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
