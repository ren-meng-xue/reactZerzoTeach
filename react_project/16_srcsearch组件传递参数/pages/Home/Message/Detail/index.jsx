import React, { Component } from 'react'
import qs from 'qs'

const DetailData = [
  { id: '01', content: 'hello' },
  { id: '02', content: 'hello123' },
  { id: '03', content: 'hello456' },
]

export default class index extends Component {

  render () {
    const { search } = this.props.location
    const { id, title } = qs.parse(search.slice(1))
    // console.log(this.props);//?id=01&title=消息1
    // const { id, title } = this.props.match.params//接收params参数 。
    //接收search参数
    const findResult = DetailData.find((itemObj) => {
      return itemObj.id === id
    })
    // console.log(findResult, 'findResult');
    return (
      <ul>

        <li>ID:{id}</li>
        <li>Title:{title}</li>
        <li>{findResult.content}</li>
      </ul>
    )
  }
}
