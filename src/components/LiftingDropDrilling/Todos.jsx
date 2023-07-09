import React from 'react'
import { v4 as uuidv4 } from 'uuid';

// components
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function Todos() {
  // states
  const [todos, setTodos] = React.useState([
    { id: 1, title: 'javascript' }
  ]);

  function deleteItem(id) {
    const clonedItems = [...todos]; // cloned
    const index = clonedItems.findIndex(todo => todo.id === id); // find index
    clonedItems.splice(index, 1);
    setTodos(clonedItems);
  }

  function addItem(title) {
    const item = {
      id: uuidv4(),
      title
    }
    setTodos(prevState => ([...prevState, item]));
  }

  // UI
  return (
    <>
      <TodoForm addItem={addItem} />
      <br />
      <TodoList todos={todos} deleteItem={deleteItem} />
    </>
  )
}

export default Todos