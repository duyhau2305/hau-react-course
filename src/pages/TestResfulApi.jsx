import React from 'react'

function TestResfulApi() {

  async function updateBook() {
    const bodyData =  {
      data: {
        email: 'tony@gmail.com',
        password: '123456'
      }
    }
    const data = await fetch('http://localhost:3000/user/1/book/23', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyData)
    })
    const result = await data.json()
    console.log('result: ', result)
  }
  return (
    <div>

      <button type="button" onClick={updateBook}>Test Update Book</button>
    </div>
  )
}

export default TestResfulApi