import { useState, useCallback, type FormEvent, type ChangeEvent } from 'react';
import debounce from 'just-debounce-it';

import { MovieList } from './components/MovieList';
import { useMovies } from './hooks/useMovies';
import { useSearch } from './hooks/useSearch';
import './App.css';

function App() {
  const [sort, setSort] = useState(false);
  const { error, updateSearch, search } = useSearch();
  const { movies, getMovies } = useMovies({ search, sort });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getMovies({ search });
  };

  const debouncedGetMovies = useCallback(
    debounce((search: string) => {
      console.log('debounce');

      getMovies({ search });
    }, 500),
    []
  );

  console.log(import.meta.env.VITE_OMD_API_KEY);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    updateSearch(newQuery);
    debouncedGetMovies(newQuery);
  };

  const handleSort = () => {
    setSort(prev => !prev);
  };

  return (
    <div className='page'>
      <h1>Buscador de peliculas</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={search}
          onChange={handleChange}
          type='text'
          placeholder='Avengers, Star Wars, Matrix...'
        />
        <input type='checkbox' onChange={handleSort} checked={sort} />
        <button type='submit'>Buscar</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <main>
        <MovieList movies={movies} />
      </main>
    </div>
  );
}

export default App;
