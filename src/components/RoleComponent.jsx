import React from 'react'

function RoleComponent({ children }) {
  console.log('role component')
  
  return (
    <div>{children}</div>
  )
}

export default RoleComponent