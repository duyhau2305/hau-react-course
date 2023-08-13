import React from 'react'

/*
  1. Ref Hook
  - keep value between component renders
  - Ref Hook là một object có thuộc tính current
  - Ref Hook không gây ra re-render khi thay đổi giá trị
  - value ref hook có thể là bất kỳ thứ gì: string, number, array, object, function, component, ...
  - allow access to DOM nodes
 
 2.Có bao nhiêu cách để giữ value giữa các lần render của component?
  - State
  - khai báo cái biến bên ngoài component
  - Ref
*/

// let number = 0;

import ButtonLink from '../components/ButtonLink';
import ButtonImperativeHandle from '../components/ButtonImperativeHandle';

function RefHook() {
  const [forceUpdate, setForceUpdate] = React.useState(false);
  const [isAuth, setIsAuth] = React.useState(false);
  const inputRef = React.useRef(null);
  let numberRef = React.useRef(0);
  const getNumber = React.useRef(() => {
    return 10
  })
  const buttonLikeRef = React.useRef(null);
  const buttonImperativeHandleRef = React.useRef(null);

  console.log('RefHook is a function: ', getNumber.current());

  function handleRender() {
    numberRef.current = numberRef.current += 10;

    // focus input
    inputRef.current.focus();
    inputRef.current.setSelectionRange(0, inputRef.current.value.length);
    inputRef.current.style.background = '#f00';

    // forwardRef
    buttonLikeRef.current.style.background = '#f00';

    // useImperativeHandle
    buttonImperativeHandleRef.current.focusInput();
    buttonImperativeHandleRef.current.isAuthImperative();

    // re-render component
    setForceUpdate(!forceUpdate)
    setIsAuth(prevState => !prevState);
  }

  console.log("RefHook render")
  return (
    <div>
      <hr />
      <h2>RefHook</h2>
      Number: {numberRef.current} <br />
      <br />
      <input type="text" ref={inputRef} />
      <button onClick={handleRender}>Click me</button>
      <br />

      <h5>forwardRef</h5>
      <ButtonLink ref={buttonLikeRef} isAuth={isAuth} text="Button Like" />


      <h5>useImperativeHandle</h5>
      <ButtonImperativeHandle ref={buttonImperativeHandleRef} text="Button useImperativeHandle" />
    </div>
  )
}

export default RefHook