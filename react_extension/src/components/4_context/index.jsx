import React, { Component } from 'react'
import './index.css'
const MyContext = React.createContext()
const { Provider, Consumer } = MyContext
export default class A extends Component {
  state = {
    username: 'tome',
    age: 18
  }
  render() {
    const { username, age } = this.state
    return (
      <div className='parent'>
        <h3>我是A组件</h3>
        <h4>我的用户名字是{username}</h4>
        <Provider value={{ username, age }}>
          <B />
        </Provider>
      </div>
    )
  }
}


class B extends Component {
  //声明接收
  static contextType = MyContext
  render() {
    console.log(this.context);
    return (
      <div className='child'>
        <h3>我是B组件</h3>
        <C />
      </div>
    )
  }
}

// class C extends Component {
//   static contextType = MyContext
//   render() {
//     const { username, age } = this.context
//     return (
//       <div className='grand'>
//         <h3>我是C组件</h3>
//         <p>{username},{age}</p>
//       </div>
//     )
//   }
// }


function C() {

  // return (
  //   <div className='grand'>
  //     <h3>我是C组件</h3>
  //     <Consumer>
  /** {
           value => {
             return `${value.username}${value.age}`
           }
         } */
  //     </Consumer>
  //   </div>
  // )
  return (
    <div className='grand'>
      <h3>我是C组件</h3>
      <Consumer>

        {
          value => `${value.username}${value.age}`
        }
      </Consumer>
    </div>
  )
}