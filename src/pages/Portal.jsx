import React from 'react';
import { createPortal } from 'react-dom';

/* apply for
  - Modal
  - Tooltip
  - Popover
  - ...
*/

function Portal() {
  const [showModal, setShowModal] = React.useState(false)
  return (
    <div style={{
      overflow: 'hidden',
      height: 100,
      position: 'relative',
    }}>
      Portal
      <button onClick={() => setShowModal(true)}>Show Modal</button>
      {showModal && createPortal( (
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          this is Modal
        </div>
      ), document.body)}
    </div>
  )
}

export default Portal