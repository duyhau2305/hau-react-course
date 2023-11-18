import React from 'react'

const ButtonLink = React.forwardRef((props, ref) => {
  const { text, isAuth } = props;
  return (
    <button type="button" ref={ref}>{isAuth ? `${text} logout` : `${text} login`}</button>
  )
})

export default ButtonLink