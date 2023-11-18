/* eslint-disable react/prop-types */
import React from 'react';

// component
import Modal from '../components/Modal';

function Welcome({ title }) {
  return (
    <span>Welcome component: {title} </span>
  )
}

function Props() {

  function handleOk() {
    console.log('handOk')
  }

  return (
    <>
      <Modal 
        title="Basic Modal" // string
        isOpen={true} // boolean
        colors={['red', 'green', 'blue']} // array
        user={{
          firstName: 'truong',
          lastName: 'nguyen'
        }} // object
        date={0} // number
        onOk={handleOk} // function
        renderComponent={<Welcome title="Hau" />} // react component
        welcomeComponent={Welcome} // react component
        welcomeTitle={'dsad'}
      />
    </>
  )
}

export default Props