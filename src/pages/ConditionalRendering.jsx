import React from 'react'
import Button from '../components/Button';

function LoginButton() {
  return (
    <Button text="Login" />
  )
}

function LogoutButton() {
  return (
    <Button text="Logout" />
  )
}

function ConditionalRendering() {
  const [numbers, setNumbers] = React.useState([]); // initial state
  let renderButton = <LoginButton />;

  if(numbers.length > 0) {
    renderButton = <LogoutButton />
  } 

  function handleAddNumber() {
    setNumbers(prevState => {
      return [...prevState, Date.now()]; // push item
    })
  }

  function renderButtonFunc() {
    return (
     <>renderButtonFunc</>
    )
  }

  return (
    <div>
      <h5>&& operator</h5>
      {numbers.length > 0 && 'has data'}

      <hr />

      <h5>tenary operator</h5>
      {numbers.length > 0 ? (
        <>
          {numbers.map(number => (
            <div key={number}>{number}</div>
          ))}
        </>
      ) : (
        <>
          <div>No data</div>
        </>
      )}

      <hr />
      <h5>Element Variable</h5>
      {renderButton}

      <hr />
      <h5>Render Function</h5>
      {renderButtonFunc()}


      <br/>
      <Button 
        text="Add Number"
        handleClick={handleAddNumber}
      />
    </div>
  )
}

export default ConditionalRendering