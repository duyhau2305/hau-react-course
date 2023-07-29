import React from 'react'

import TodoItem from './TodoItem';

function TodoList({ todos, deleteItem }) {
  return (
    <div>
      <br />
      {todos.map(todo => {
        return (
          <TodoItem key={todo.id} todo={todo} deleteItem={deleteItem} />
        )
      })}
    </div>
  )
}

export default TodoList