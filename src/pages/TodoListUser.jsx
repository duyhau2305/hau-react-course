import React, { useReducer, useState } from 'react';

const initialState = {
  todos: [],
  isLoading: false,
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, action.payload] };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

const TodoListUser = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [text, setText] = useState('');

  const handleAddClick = () => {
    if (text.trim() === '') {
      alert('Todo text cannot be empty');
      return;
    }

    dispatch({ type: 'SET_LOADING', payload: true });

    setTimeout(() => {
      const newTodo = { id: Date.now(), text }; // Create a new todo object
      dispatch({ type: 'ADD_TODO', payload: newTodo });
      setText('');
      dispatch({ type: 'SET_LOADING', payload: false });
    }, 500); // Simulate a delay of 500 milliseconds
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        disabled={state.isLoading}
      />
      <button onClick={handleAddClick} disabled={state.isLoading}>
        Add
      </button>
      <h2>TodoList userReducer</h2>
      {state.isLoading ? <p>Loading...</p> : null}
      <ul style={{ listStyle: 'none', margin: 2 }}> {/* Inline styling */}
        {state.todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoListUser;

