import React from 'react'
import { Link, Outlet, useLocation, useSearchParams, useNavigate } from 'react-router-dom';

import Profile from './Profile';
import Account from './Account';

function User() {
  const [view, setView] = React.useState('profile')
  const location = useLocation();
  const [searchParams] = useSearchParams(); // get query params from url: xxx?limit=10&page=1
  const navigate = useNavigate();

  console.log('react router: ', {
    location,
    limit: searchParams.get('limit'),
    page: searchParams.get('page')
  })

  function handleGotoHome() {
    // navigate('/', { replace: true }) // replace: true => replace current url in history
    navigate('/'); // replace: false => push new url to history
  }

  return (
    <div>
      First Name: John <br />
      Last Name: Doe <br />


      <br />
      <ul>
        <li><Link to="/user/profile">Profile</Link></li>
        <li><Link to="/user/account">Account</Link></li>
        <li><Link to="/user/123">User Detail</Link></li>
      </ul>

      Navigate to Home: <button type="button" onClick={handleGotoHome}>Go to Home</button>
      
      <br />

      <Outlet />
      {/* {view === 'profile' && <Profile />}

      {view === 'account' && <Account />} */}


    </div>
  )
}

export default User