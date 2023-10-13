import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Header() {
  const navigation = useNavigate()
  function back() {
    navigation(-1)
  }
  function forward() {
    navigation(1)

  }
  return (
    <div className="col-xs-offset-2 col-xs-8">
      <div className="page-header"><h2>React Router Demo</h2>

        <button onClick={back}>前进</button>
        <button onClick={forward}>后退</button>
      </div>

    </div>
  )
}
