import React from 'react'
import Button from '../components/Button';

function createInitialState() {
  console.log('createInitialState ---------->: ')
  return {
    firstName: 'tony',
    lastName: 'truong'
  }
}

function StateHook() {
  // const [form, setForm] = React.useState(createInitialState()); // Passing the initial state directly: createInitialTodos() is only used for the initial render, you’re still calling this function on every render

  const [form, setForm] = React.useState(createInitialState); // // Passing the initial state directly: createInitialTodos() is only used for the initial render, you’re still calling this function on every render

  const [forceUpdate, setForceUpdate] = React.useState(Date.now());

  console.log('StateHook ---------->: ', { form })

  return (
    <div>
      <h1>StateHook</h1>
      ForceUpdate: {forceUpdate} 

      <br />   <br />

      <Button 
        text="Force Update"
        handleClick={() => setForceUpdate(Date.now())}
      />
    </div>
  )
}

export default StateHook