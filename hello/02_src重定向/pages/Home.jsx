import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
export default function Home() {
  const [sum, setSum] = useState(1)
  return (
    <div>
      Home

      {
        sum == 2 ? <Navigate to='/about'></Navigate> : <h4>当前sum的值是{sum}</h4>
      }
      <button onClick={() => setSum(2)}>点我sum变2</button>
    </div>
  )
}
