import React from 'react'
import { useSearchParams, useLocation } from 'react-router-dom'
export default function Detail() {
  const b = useLocation()
  console.log(b);
  const [search, setSearch] = useSearchParams()
  //search参数   setSearch更新search参数上的方法
  const id = search.get('id')
  const title = search.get('title')
  const content = search.get('content')
  // console.log(search.get('id'));
  // console.log(search.get('title'));
  // console.log(search.get('content'));
  return (
    <ul>
      <li>
        {
          /**http://localhost:3000/home/message/detail?id=008&title=%E5%93%88%E5%93%88&content=%E5%97%B7%E5%97%B7%E5%97%B7 */
        }
        <button onClick={() => setSearch('id=008&title=哈哈&content=嗷嗷嗷')}>点我更新收到的search参数</button></li>
      <li>{id}</li>
      <li>{title}</li>
      <li>{content}</li>
    </ul>
  )
}
