import React from 'react';
import { Link, NavLink, Routes, Route } from 'react-router-dom';

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
import  LiftingStateUp from './pages/LiftingStateUp';
import BoxColor from './pages/BoxColor';
import StateHook from './pages/StateHook';
import UseReducer from './pages/UseReducer';
import UseEffect from './pages/UseEffect';
import ContextHook from './pages/ContextHook/ContextHook';
import RefHook from './pages/RefHook';
import PerformanceHook from './pages/PerformanceHook';

// components
import Button from "./components/Button"
import State from "./pages/State";
import Form from './pages/Form';
import TodoListUser from './pages/TodoListUser';
import ReactJSXDetail from './pages/ReactJSXDetail';
import User from './pages/User/User';
import Profile from './pages/User/Profile';
import Account from './pages/User/Account';
import UserDetail from './pages/User/UserDetail';
import AuthRoute from './components/route/AuthRoute'

function App() {
  const [dateTime, setDateTime] = React.useState(Date.now()); // local state of component App
  const [book, setBook] = React.useState({
    name: "ReactJS",
    price: 100,
    releaseDate: Date.now()
  })
  
  console.log("App Component")

  function handleRender() {
    setDateTime(Date.now())
    setBook(prevState => ({
      ...prevState,
      price: prevState.price + 1
    }))
  }

  // function will re-created every time the component re-render
  const handleChangeBook = React.useCallback(() => {
    console.log("handleChangeBook: ", dateTime)
    setBook(prevState => ({
      ...prevState,
      price: prevState.price + 10
    }))
  }, [dateTime])

  const getNumber = React.useMemo(() => {
    return book.price + 10;
  }, [book.price])

  return (
    <>
      <h1>Vite + React</h1> <br />
      UseMemo: {getNumber} 

      <Button text="Force Update" handleClick={handleRender} />
      <br /><br />
      <ul>
        <li>
          <Link to="/react-jsx">React JSX</Link>
        </li>
        <li>
          <NavLink to="/statefull-component">Stateful Component</NavLink>
        </li>
        <li>
          <NavLink to="/user">User</NavLink>
        </li>
      </ul>

      <br />
      <div>
        <Routes>
          <Route path="/react-jsx" element={<ReactJSX />} />
          <Route path="/react-jsx/:id" element={<ReactJSXDetail />} />
          <Route path="/statefull-component" element={<AuthRoute><StatefulCompoment /></AuthRoute>} />
          {/* <Route path="/user" element={<User />} />
          <Route path="/user/profile" element={<Profile />} />
          <Route path="/user/account" element={<Account />} /> */}
          <Route path="/user" element={<AuthRoute><User /></AuthRoute>}>
            <Route path="profile" element={<Profile />} />
            <Route path="account" element={<Account />} />
            {/* xxx/123/product/53 */}
            {/* <Route path=":id/product/:productId" element={<UserDetail />} />  */}
            <Route path=":id" element={<UserDetail />} /> 
          </Route>
        </Routes>
      </div>

      <hr />


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
      <h2>LiftingStateUp</h2>
      <LiftingStateUp />

      <br />
      <h2>Form</h2>
      <Form />

      <br />
      <h2>Sample App: Box Color</h2>
      <BoxColor />

      <br />
      <StateHook />

      <br />
      <UseReducer />
      <br />      
      <br />

      <br />
      <UseEffect />
      <br />
      
      <TodoListUser />
      <br />

      <ContextHook />

      <br/> 
      <RefHook />

      <br />
      <PerformanceHook 
        name={book.name} 
        price={book.price} 
        handleChangeBook={handleChangeBook}
      />

      <br />
    </>
  )
}

export default App
