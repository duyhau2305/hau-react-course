import  { useState } from 'react'
import Button from '../components/Button';

function StatefulCompoment() {
  const [count, setCount] = useState(0); // local state of component

  console.log('StatefulCompoment: ', count)

  function increment() {
    setCount(prevState => prevState + 1);
  }

  function descrement() {
    setCount(prevState => prevState - 1)
  }

  return (
    <div>
      StatefulCompomemt
      <br />
      Count: {count}
      <br />
      <Button 
        text="Increment"
        handleClick={increment}
      />
      <Button 
        text="Descrement"
        handleClick={descrement}
      />


    </div>
  )
}

export default StatefulCompoment