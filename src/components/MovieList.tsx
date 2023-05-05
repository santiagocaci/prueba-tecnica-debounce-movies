import { Movie } from '../types';

type Props = {
  movies: Movie[];
};

export function MovieList({ movies }: Props) {
  const hasMovies = movies?.length > 0;
  return (
    <>
      {hasMovies ? (
        <ul className='movies'>
          {movies.map(({ title, id, poster, year }) => (
            <li className='movie' key={id}>
              <h3>{title}</h3>
              <p>{year}</p>
              <img src={poster} alt={title} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No movies</p>
      )}
    </>
  );
}
