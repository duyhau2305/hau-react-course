/* eslint-disable react/prop-types */
import React from 'react'

import styles from './avatar.module.css'

function Avatar({ url }) {
  return (
    <div className={
      // styles['button--primary']
      styles.button_secondary
    }>
      <img src={url} />
    </div>
  )
}

export default Avatar