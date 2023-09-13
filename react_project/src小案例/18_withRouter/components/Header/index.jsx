import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// withRouter 能够接收一个一般组件，然后就能将路由身上的属性，给一般组件
// withRouter的返回值是新组件
class Header extends Component {

  goBack1 = () => {
    this.props.history.goBack();
  }
  render () {

    return (
      <div className="page-header">
        <button onClick={this.goBack1}>go</button>
        <h2>React Router Demo</h2>
      </div>
    )
  }
}

export default withRouter(Header)