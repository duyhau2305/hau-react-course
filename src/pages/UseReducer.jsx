import React from 'react'

// components
import Button from '../components/Button';

// constant
const SHOW_LOADING = 'TODO/SHOW_LOADING';
const HIDE_LOADING = 'TODO/HIDE_LOADING';
const ADD_ITEM = 'TODO/ADD_ITEM';
const SET_TITLE = 'TODO/SET_TITLE';
const DELETE_ITEM = 'TODO/DELETE_ITEM'

// initial state
const initialState = {
  todos: [],
  isLoading: false,
  title: ''
}

// action creator
function showLoading() {
  return {
    type: SHOW_LOADING
  }
}

function hideLoading() {
  return {
    type: HIDE_LOADING
  }
}

function addItem(payload) {
  return {
    type: ADD_ITEM,
    payload 
  }
}

function setTitle(payload) {
  return {
    type: SET_TITLE,
    payload 
  }
}

function deleteItem(payload) {
  return {
    type: DELETE_ITEM,
    payload: {
      todos: payload
    }
  }
}

// reducer
function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case SHOW_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case HIDE_LOADING:
      return {
        ...state,
        isLoading: false
      }
    case ADD_ITEM:
      return {
        ...state,
        todos: [...state.todos, payload]
      }
    case SET_TITLE:
      return {
        ...state,
        title: payload
      }
    case DELETE_ITEM: {
      return {
        ...state,
        todos: payload.todos
      }
    }
    default: 
      return state;
  }
}

function UseReducer() {
  // hooks
  const [{ todos, title, isLoading }, dispatch] = React.useReducer(reducer, initialState);

  function handleAddItem() {
    const newItem = {
      id: Date.now(),
      text: title
    }

    dispatch(showLoading());
    setTimeout(() =>{
      dispatch(addItem(newItem))
      dispatch(hideLoading())
    }, 1000)

    // setIsLoading(true); // SHOW LOADING

    // setTimeout(() =>{
    //   setTodos(prevState => {
    //     return [...prevState, newItem]
    //   })
    //   setIsLoading(false);  // HIDE LOADING
    // }, 1000)
  }

  function handleDelete(todoId) {
    const clonedTodo = [...todos];
    const index = clonedTodo.findIndex(todo => todo.id === todoId);
    clonedTodo.splice(index, 1);
    dispatch(deleteItem(clonedTodo))
  }

  return (
    <div>
      <h1>UseReducer</h1>

      Title: 
      <input 
        type="text" 
        onChange={e => {
          dispatch(setTitle(e.target.value))
        }} 
      /> 

      <Button text='Add' handleClick={handleAddItem}/>


      <h4>Todo List</h4>
      {isLoading ? 'Loading ...' : (
        <>
          {todos.map(todo => {
            return (
              <>
                <div>
                  Id: {todo.id} <br />
                  Title: {todo.text} <br />
                  <Button text="Delete" handleClick={() => handleDelete(todo.id)}  />
                </div>
                <hr />
              </>
            )
          })}
        </>
      )}
      
    </div>
  )
}

export default UseReducer