import React from 'react'
import { useNavigate } from 'react-router-dom';

function AuthRoute({ children}) {
  const navigate = useNavigate();
  const access_token = window.localStorage.getItem('access_token');

  function onGotoLogin() {
    navigate('/login')
  }

  if(!access_token) {
    return (
      <div>
        <h2>Access Denied</h2>
        <p>You need to login to access this page</p>
        <button type="button" onClick={onGotoLogin}>Go to Login</button>
      </div>
    )
  }
  
  return (
    <div>{children}</div>
  )
}

export default AuthRoute