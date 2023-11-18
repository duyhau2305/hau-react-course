import React from 'react'

// compoennts
import Button from "../components/Button"

function HandleEvent() {
  const [count, setCount] = React.useState(5); // local state of component // 5

  // function handleIncrement(number) {
  //   setCount(prevState => prevState + 5 + number);
  // }

  // curry function
  const handleIncrement = number => () => {
    setCount(prevState => prevState + 5 + number);
  }

  return (
    <div>
      Count: {count} <br />
      <Button               
        text="Update Count"
        // handleClick={handleIncrement}

        // handleClick={() => {
        //   handleIncrement(10);
        // }} // pass argument
        // user click  => trigger 1 action => () => {} => handleIncrement(10)

        handleClick={handleIncrement(5)} // curry function
        // user click => trigger 1 action => handleIncrement(10);
      />
      <br />

    </div>
  )
}

export default HandleEvent