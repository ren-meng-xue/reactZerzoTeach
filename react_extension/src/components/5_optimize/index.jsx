import React, { Component, PureComponent } from 'react'
import './index.css'
export default class Parent extends PureComponent {
  state = {
    carName: '坦克300'
  }
  changeName = () => {
    this.setState({
      carName: '123f'
    })
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(this.state.carName === nextState.carName);
  //   //下一个子组件传递给父组件的props&&下一个要改变的nextState
  //   // console.log(nextProps, nextState);
  //   // if (nextState.carName === this.state.carName) return false
  //   // else return true
  //   return !(this.state.carName === nextState.carName)


  // }

  render() {
    console.log('parent', 'render');
    return (
      <div className='parent'>
        <h3 >我是parent组件</h3>
        {this.state.carName}
        <button onClick={this.changeName}>点我更改名字</button>
        <Child carName={this.state.carName} />
      </div>
    )
  }
}


class Child extends PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return !(this.props.carName == nextProps.carName)
  // }
  render() {
    console.log('child', 'render');
    return (
      <div className='child'>
        {this.props.carName}
        <h3 >我是Child组件</h3>

      </div>
    )
  }
}
