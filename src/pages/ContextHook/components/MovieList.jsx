import React from 'react'
import MovieItem from './MovieItem';

// context
import { useMovieContext } from '../../../contexts/MovieContext';

function MovieList() {
  const { movies } = useMovieContext();

  return (
    <div>
      <h5>List Movies</h5>
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} />
      ))}

    </div>
  )
}

export default MovieList