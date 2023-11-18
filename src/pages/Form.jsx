import React from 'react'

import Button from '../components/Button';
import { useResizeWindow } from '../hooks/useResizeWindow';

function Form() {
  const [form, setForm] = React.useState({
    firstName: '',
    lastName: '',
    gender: 'male'
  });
  const refFirstName = React.useRef(null);
  const { isSmallScreen } = useResizeWindow();
  
  function onSubmit() {
    setForm(prevState => ({
      ...prevState,
      firstName: refFirstName.current.value,
    }))
  }

  function onChange(e) {
    setForm(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  console.log('form ----------->: ', form);

  return (
    <div>
      <h4>Demo custom hooks with small screen: {isSmallScreen ? 'small screen' : 'large screen'}</h4>
      <h4>Uncontroller Component</h4>
      <input ref={refFirstName} defaultValue="tony" type="text" /> 

      <br />
      <h4>Controller Component</h4>
      <input name="lastName" value={form.lastName} type="text" onChange={onChange} />

      <br />
      Gender: 
      <select value={form.gender} name="gender" onChange={onChange}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <br />
      <br />
      <Button 
        text="Submit"
        handleClick={onSubmit} 
      />

    </div>
  )
}

export default Form