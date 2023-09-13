import React, { Component } from 'react'
import qs from 'qs'

const DetailData = [
  { id: '01', content: 'hello' },
  { id: '02', content: 'hello123' },
  { id: '03', content: 'hello456' },
]

export default class index extends Component {

  render () {
    //接收params参数
    // const { id, title } = this.props.match.params


    //接收search参数
    const { search } = this.props.location
    const { id, title } = qs.parse(search.slice(1))


    //接收state参数
    // const { id, title } = this.props.location.state || {}
    // //接收search参数
    const findResult = DetailData.find((itemObj) => {
      return itemObj.id === id
    }) || {}
    return (
      <ul>
        <li>ID:{id}</li>
        <li>Title:{title}</li>
        <li>{findResult.content}</li>
      </ul>
    )
  }
}
