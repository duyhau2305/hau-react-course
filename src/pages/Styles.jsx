import React from 'react';
import clsx from 'clsx';

import Button from '../components/Button';

function Styles() {
  const [isAuth, setIsAuth] = React.useState(false);

  const styleHeading4 = {
    fontSize: 15, 
    fontWeight: 'bold'
  }

  return (
   <>
     <div className="logined">
      <h4 style={styleHeading4}>Inline css</h4>
    </div>

    <div 
      // className={isAuth ? 'italic normal' : 'italic notice'}
      // className={`italic ${isAuth ? 'normal' : 'notice'}`}
      className={clsx(
        "italic",
        isAuth ? 'normal' : 'notice',
        // left && "popoverItem_left",
        // popoverPosition === 'tabMenu' && "popoverItem_tabMenu",
        // popoverPosition === 'variables' && "popoverItem_variables",
        // popoverPosition === 'notification' && "popoverItem_notification",
      )}
    >
      className by state
      <Button text="Change Auth" handleClick={() => setIsAuth(prevState => !prevState)} />
    </div>
   </>
  )
}

export default Styles