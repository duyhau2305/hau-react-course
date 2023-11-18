import React from 'react'

function TodoTotal({ todos }) {
  return (
    <div><b>Total</b>: {todos.length}</div>
  )
}

export default TodoTotal