/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import Button from '../components/Button';

/*
How many ways to component  re-render?
- State changes
- Props changes
- Parent component re-render
- Key changes (trick) (force update component)
    - use when you want to re-render component but don't want to change state or props
*/

function State({ dateTime }) {
  // const [number, setNumber] = React.useState()
  const [title, setTitle] = useState('State');
  const [count, setCount] = useState(5); // local state of component // 5
  const [todoItem, setTodoItem] = useState({
    id: 1,
    title: 'learn react'
  })
  const [forceUpdate, setForceUpdate] = useState(Date.now()); // local state of component //1
  const [messageObject, setMessageObject] = React.useState({
    message: '',
    author: {
      text: '',
      id: 1
    }
  }); // memory A

  function onChangeMessage(e) {
    // messageObject.message = e.target.value; // don't work because React don't know state change
    
    // way 1: create new object
    // const newObject = {
    //   ...messageObject,
    //   message: e.target.value
    // } // memory B
    // setMessageObject(newObject)   // memory B

    // way 2: updater function
    setMessageObject((prevState) => {
      return {
        ...prevState,
        message: e.target.value
      }
    })
  }

  function onChangeAuthorText(e) {
    const { value } = e.target;

    // wrong
    // setMessageObject(prevState => ({
    //   ...prevState,
    //   text: value
    // }))

    // correct
    setMessageObject(prevState => ({
      ...prevState, // copy all properties of messageObject
      author: {
        ...prevState.author, // copy all properties of author
        text: value
      }
    }))
  }

  console.log('State: ', { messageObject })

  function handleIncrement() {
    // setCount(count + 1); // way 1
    setCount(prevState => {
      return prevState + 1
    });
  }

  return (
    <div key={forceUpdate}>
      Title: {title}  <br />
      forceUpdate: {forceUpdate}
      <Button               
        text="Update Title"
        handleClick={() => {
          // batching update state
          setTitle('State'); // don't re-render because prevState same with next state
          setForceUpdate(Date.now()) // 2
          setCount(prevState => {
            return prevState + 1
          }); // 6
          // setCount(prevState => prevState - 1);
        }}
      />
      <br />

      Count: {count} 
      <Button 
        text="Increment"
        handleClick={handleIncrement}
      />
      <br />

      Todo: {todoItem.title}
      <Button 
        text="Update Todo"
        handleClick={() => {}}
      />

      <h5>Update Object</h5>
      <input 
        type="text" 
        value={messageObject.message}
        onChange={onChangeMessage} // abc
      />

      <h5>Update nested object</h5>
      <input 
        type="text" 
        value={messageObject.author.text}
        onChange={onChangeAuthorText} // abc
      />

    </div>
  )
}

export default State