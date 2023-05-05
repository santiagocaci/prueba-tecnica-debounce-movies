import { useState } from 'react';

export function useSearch() {
  const [search, setSearch] = useState('');
  const [error, setError] = useState<string | null>(null);

  function updateSearch(newQuery: string) {
    if (newQuery === ' ') return;
    setSearch(newQuery);
    if (newQuery === '') {
      setError('No se puede buscar una pelicula vacia');
      return;
    }
    if (newQuery.length < 3) {
      setError('La busqueda debe tener al menos 3 caracteres');
      return;
    }
    setError(null);
  }

  return { search, setSearch, error, setError, updateSearch };
}
