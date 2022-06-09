import React from 'react'
import { useState } from 'react'

const Counter = ({ onChange }) => {

  const [count, setCount] = useState(0)

  const subtract = () => {
    if (count > 0) {
      setCount(count - 1)
    }
    onChange(count)
  }

  const add = () => {
    setCount(count + 1)
    onChange(count)
  }

  return (
    <div style={{ display: 'flex' }}>
      <button onClick={subtract}>-</button>
      <h2>{count}</h2>
      <button onClick={add}>+</button>
    </div>
  )
}

export default Counter