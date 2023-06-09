import React from 'react';

// pages
import ReactJSX from "./pages/ReactJSX"
import StatefulCompoment from './pages/StatefulCompoment';
import ComposeComponent from "./pages/ComposeComponent";
import Props from './pages/Props';
import HandleEvent from './pages/HandleEvent';
import ConditionalRendering from './pages/ConditionalRendering';
import GuestGreeting from './pages/GuestGreeting';
import List from './pages/List';
import Styles from './pages/Styles';
import GenerateBox from './pages/GenerateBox';
import  LiftingDropDriling from './pages/LiftingDropDriling';

// components
import Button from "./components/Button"
import State from "./pages/State";

function App() {
  const [dateTime, setDateTime] = React.useState(Date.now()); // local state of component App
  
  console.log("App Component")

  function handleRender() {
    setDateTime(Date.now())
  }

  return (
    <>
      <h1>Vite + React</h1>

      <Button handleClick={handleRender} />


      <h2>React JSX</h2>
      <ReactJSX />
      <br />
      <Button />
      <br />

      <br />
      <h2>Stateful Component</h2>
      <StatefulCompoment />

      <br />
      <h2>ComposeComponent</h2>
      <ComposeComponent />
      
      <br />
      <h2>Props Component</h2>
      <Props />

      <br />
      <h2>State Component</h2>
      <State dateTime={dateTime} />

      <br />
      <h2>HandleEvent Component</h2>
      <HandleEvent />

      <br />
      <h2>ConditionalRendering</h2>
      <ConditionalRendering />

      <br />
      <h2>Sample App: GuestGreeting</h2>
      <GuestGreeting />

      <br />
      <h2>List</h2>
      <List />

      <br />
      <h2>Styles</h2>
      <Styles />

      <br />
      <h2>Sample App: GenerateBox</h2>
      <GenerateBox />

      <br/>
      <h2>LiftingDropDirling</h2>
      <LiftingDropDriling />
    </>
  )
}

export default App
