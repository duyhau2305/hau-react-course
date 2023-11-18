import React from 'react'
import { useMovieContext } from '../../../contexts/MovieContext'

function MovieForm() {
  const titleRef = React.useRef();
  const { addMovie } = useMovieContext();



  return (
    <div>
      MovieForm:

      <input type="text" ref={titleRef} />
      <button 
        onClick={() => {
          addMovie(titleRef.current.value)
        }}
      >
        Add
      </button>
      
    </div>
  )
}

export default MovieForm