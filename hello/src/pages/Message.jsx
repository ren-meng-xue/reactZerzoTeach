import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
export default function Message() {
  const navigate = useNavigate()
  const [messages] = useState([
    { id: '001', title: '消息1', content: '发货的' },
    { id: '002', title: '消息2', content: '的韩国进口的' },
    { id: '003', title: '消息3', content: '交司法考试' },
    { id: '004', title: '消息4', content: '是否就是快' },
  ])
  function showDetail(m) {
    console.log(1255);
    navigate('detail', {
      //配置对象
      replace: false,
      state: {
        id: m.id,
        title: m.title,
        content: m.content
      }
    })
  }
  return (
    <div>
      <ul>
        {
          messages.map((m) => {
            return (<li key={m.id}>
              {/**search参数 */}
              <Link to='detail' state={{ id: m.id, title: m.title, content: m.content }}>{m.title}</Link>
              <button onClick={() => showDetail(m)}>点我查看详情</button>
            </li>)
          })
        }
      </ul>
      <Outlet />
    </div>
  )
}
