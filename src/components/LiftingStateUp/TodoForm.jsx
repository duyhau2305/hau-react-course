import React from 'react'
import Button from '../Button'

function TodoForm({ addItem }) {
  const [title, setTitle] = React.useState('');

  function _add() {
    addItem(title)
  }

  return (
    <div>
      Title: <input type="text" onChange={e => {
        setTitle(e.target.value)
      }} /> 

      <Button text='Add' handleClick={_add}/>
    </div>
  )
}

export default TodoForm