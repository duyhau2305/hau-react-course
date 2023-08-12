import React from 'react'
import Button from '../../../components/Button'

function MovieItem({ movie }) {
  return (
    <div>
      <ul>
        <li>
          Title: {movie.title}
          <Button text="Delete" />
        </li>
      </ul>
    </div>
  )
}

export default MovieItem