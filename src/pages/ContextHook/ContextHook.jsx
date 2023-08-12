import React from 'react';

import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';
import { MovieProvider } from '../../contexts/MovieContext';

function ContextHook() {
  return (
    <MovieProvider>
      <div>
        <hr />
        <h2>ContextHook</h2>

        <MovieForm />

        <MovieList />
      </div>
    </MovieProvider>
  )
}

export default ContextHook