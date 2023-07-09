import React , { useState } from 'react'

function GuestGreeting() {  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleToggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <h1>Welcome to Tony</h1>
          <button onClick={handleToggleLogin}>Logout</button>
        </>
      ) : (
        <>
          <h1>Please sign up</h1>
          <button onClick={handleToggleLogin}>Login</button>
        </>
      )}
    </div>
  );
}

export default GuestGreeting