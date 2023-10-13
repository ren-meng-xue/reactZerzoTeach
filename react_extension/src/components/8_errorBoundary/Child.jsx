import React, { Component } from 'react'

export default class Child extends Component {
  state = {
    users: [
      {
        id: '001', name: 'tome', age: 19
      },
      {
        id: '002', name: 'tome', age: 9
      },
      {
        id: '003', name: 'tome', age: 119
      }
    ]
  }
  render() {
    return (
      <div>
        <h2>Child</h2>
        {
          this.state.users.map((item) => {
            return (<h4 key={item.id}>{item.name}{item.age}</h4>)
          })
        }
      </div>
    )
  }
}
