import React from 'react'

import Button from '../Button';

function TodoItem({ todo, deleteItem }) {
  return (
    <>
      <div>
        Id: {todo.id} <br />
        Title: {todo.title} <br />
        <Button text="Delete" handleClick={() => deleteItem(todo.id)}  />
      </div>
      <hr />
    </>
  )
}

export default TodoItem