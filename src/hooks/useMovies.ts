import { useState, useRef, useMemo, useCallback } from 'react';
import { searchMovies } from '../services/movies';
import { Movie } from '../types';

// type error = { Response: string; Error: string };

export function useMovies({ search, sort }: { search: string; sort: boolean }) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const previusSearch = useRef(search);

  const getMovies = useCallback(async ({ search }: { search: string }) => {
    if (search === previusSearch.current) return;
    try {
      setIsLoading(true);
      setError('');
      previusSearch.current = search;
      const data = await searchMovies({ search });
      setMovies(data);
    } catch (error) {
      if (error instanceof Error) setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const sortedMovies = useMemo(
    () =>
      sort
        ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
        : movies,
    [sort, movies]
  );

  return { movies: sortedMovies, error, isLoading, getMovies };
}
