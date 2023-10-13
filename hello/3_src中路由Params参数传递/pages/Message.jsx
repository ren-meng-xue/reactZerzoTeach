import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
export default function Message() {
  const [messages] = useState([
    { id: '001', title: '消息1', content: '发货的' },
    { id: '002', title: '消息2', content: '的韩国进口的' },
    { id: '003', title: '消息3', content: '交司法考试' },
    { id: '004', title: '消息4', content: '是否就是快' },
  ])


  return (
    <div>
      <ul>
        {
          messages.map((m) => {
            return (<li key={m.id}>
              {/**params参数 */}
              <Link to={`detail/${m.id}/${m.title}/${m.content}`}>{m.title}</Link>
            </li>)
          })
        }
      </ul>
      <Outlet />
    </div>
  )
}
