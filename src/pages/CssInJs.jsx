import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';

// css module
import styles from './cssinjs.module.css'


/* css in react
1. css module
-  it is convenient for components that are placed in separate files.

2. global css
- it is convenient for global styles, such as add name class.

3. classnames library
- it is convenient for conditional styling, multiple classes, and dynamic classes.

4. css in js
- styled-components
- emotion
*/

const TitleStyled = styled.div`
  font-weight: bold;
  color: ${props => props.color || '#000'}
`

function CssInJs() {
  const [isAuth, setIsAuth] = React.useState(false);
  const [status, setStatus] = React.useState("pending");

  let color = '#9432a8';
  if(status === 'pending') color = '#a8a832';
  if(status === 'error') color = '#a83232';
  if(status === 'success') color = '#32a852';

  return (
    <div>
      Test Auth: <button type="button" onClick={() => setIsAuth(!isAuth)}>Toggle Auth</button>
      Select: <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="pending">Pending</option>
        <option value="success">Success</option>
        <option value="error">Error</option>
        </select>
      <br />
      <h3 
        styles= {{ color: `${color}` }}
        // className={`${styles.bold} ${isAuth ? styles.red : 'normal'} ${status === 'error' && 'text-error'}`} // single line
        className={clsx(
          styles.bold,
          isAuth && styles.red,
          status === 'error' && 'text-error',
          status === 'pending' && 'text-pending',
          status === 'success' && 'text-success'
        )} // multiple class (clsx)
      >
        CSS module
      </h3>


      <TitleStyled color={color}>css in js: styled component</TitleStyled>
    </div>
  )
}

export default CssInJs