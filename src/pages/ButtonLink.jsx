import React from 'react'

const ButtonLink = React.forwardRef((props, ref) => {
  const { text } = props;
  return (
    <button type="button" ref={ref}>{text}</button>
  )
})

export default ButtonLink