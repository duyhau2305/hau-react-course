/* eslint-disable react/prop-types */
import React from 'react'

import Button from './Button';

function Modal({ title, isOpen, colors, user, date, onOk, renderComponent, welcomeComponent: WelcomeComponent, welcomeTitle }) {
  return (
    <div>
      Title: {title} <br />
      User: {user.firstName} <br />
      Number: {date} <br />
      Component: {renderComponent} <br />
      Welcome component: <WelcomeComponent title={welcomeTitle} />

      <br />

    <Button
      handleClick={onOk}
    />

    </div>
  )
}

export default Modal