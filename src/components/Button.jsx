/* eslint-disable react/prop-types */
import styles from './button.module.css'

// Stateless components
function Button({ text = 'Default', type = 'button', handleClick }) {
  return (
    <button className={styles.button_secondary} type={type} onClick={handleClick} >{text}</button>
  )
}

export default Button