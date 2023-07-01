/* eslint-disable react/prop-types */

// Stateless components
function Button({ text = 'Default', type = 'button', handleClick }) {
  return (
    <button type={type} onClick={handleClick} >{text}</button>
  )
}

export default Button