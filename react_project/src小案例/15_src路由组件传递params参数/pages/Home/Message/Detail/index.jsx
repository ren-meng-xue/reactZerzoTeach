import React, { Component } from 'react'

const DetailData = [
  { id: '01', content: 'hello' },
  { id: '02', content: 'hello123' },
  { id: '03', content: 'hello456' },
]
export default class index extends Component {

  render () {
    const { id, title } = this.props.match.params
    const findResult = DetailData.find((itemObj) => {
      return itemObj.id === id
    })
    console.log(findResult, 'findResult');
    return (
      <ul>
        <li>ID:{id}</li>
        <li>Title:{title}</li>
        <li>{findResult.content}</li>
      </ul>
    )
  }
}
