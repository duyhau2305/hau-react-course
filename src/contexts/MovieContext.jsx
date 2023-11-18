import React from 'react';

const MovieContext = React.createContext();

export function MovieProvider({ children }) {
  const [movies, setMovies] = React.useState([]);

  // fetch data from API
  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums?_limit=10&_page=1')
      .then(response => response.json())
      .then(json => setMovies(json))
  }, [])

  function addMovie(title) {
    if(!title) return;

    const newItem = {
      "userId": Date.now(),
      "id": Date.now(),
      "title": title
    };
    setMovies(prevState => ([newItem, ...prevState]));
  }

  return (
    <MovieContext.Provider
      value={{
        // states
        movies,
        // actions
        addMovie,
      }}
    > 
      {children}
    </MovieContext.Provider>
  )
}


export const useMovieContext = () => React.useContext(MovieContext);