import React from 'react'

// components
import Button from "../components/Button"

function ReactJSX() {
  const user = {
    name: 'Truong',
    avatar: 'https://picsum.photos/200/300'
  }

  // expression
  const name = 'Express in React JSX';

  // top element
  const topElement = (
    <div>
      Demo render JSX with variable javascript
    </div>
  )

  // render JSX with Function
  function renderJSX() {
    return (
      <div>Demo render JSX with Function</div>
    )
  }

  // View JSX
  return (
    // One Top Level Element
    // React Fragment
    <> 
      <div>ReactJSX</div> <br />

      {name} <br /><br />

      {topElement} <br />

      {renderJSX()}

      <br />
      <div> Elements Must be Closed</div>
      {/* <input type="text" /></input> */}
      <input type="text" />

      <img src={user.avatar} />

      <br />

      <Button text="Demo Stateless component" type="button" />
      <br />

    </>
  )
}

export default ReactJSX