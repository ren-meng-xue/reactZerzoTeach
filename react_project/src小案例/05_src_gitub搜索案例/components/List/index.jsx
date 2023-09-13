import React, { Component } from 'react'
import './index.css'
export default class List extends Component {
  render () {
    const { users, isFirst, isLoading, err } = this.props
    return (
      <div className="row">
        {
          isFirst ? <h2>输入关键字，随后点击搜索</h2> :
            isLoading ? <h2>Loading....</h2> : err ? <h2 style={{ color: 'red' }}>{err}</h2> :
              users.map((item) => {
                return (
                  <div className="card" key={item.id} >
                    <a href={item.html_url} target="_blank" rel="noreferrer">
                      <img src={item.avatar_url} style={{ width: '100px' }} alt='img' />
                    </a>
                    <p className="card-text">{item.login}</p>
                  </div>
                )
              })
        }
      </div>
    )
  }
}
