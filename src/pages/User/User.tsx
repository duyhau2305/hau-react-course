import React from 'react'

import Profile from './Profile';
import Account from './Account';
import { Link, Outlet } from 'react-router-dom';

function User() {
  const [view, setView] = React.useState('profile')

  return (
    <div>
      First Name: John <br />
      Last Name: Doe <br />


      <br />
      <ul>
        <li><Link to="/user/profile">Profile</Link></li>
        <li><Link to="/user/account">Account</Link></li>
      </ul>
      
      <br />

      <Outlet />
      {/* {view === 'profile' && <Profile />}

      {view === 'account' && <Account />} */}


    </div>
  )
}

export default User