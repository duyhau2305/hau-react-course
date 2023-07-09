import React from 'react'

import TodoItem from './TodoItem';
import TodoTotal from './TodoTotal';

function TodoList({ todos, deleteItem }) {
  return (
    <div>
      <TodoTotal todos={todos} />
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