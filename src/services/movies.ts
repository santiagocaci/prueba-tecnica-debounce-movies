// const API_KEY = 'a577068c';

export const searchMovies = async ({
  search,
}: {
  search: string;
}): Promise<null | any> => {
  if (search === '') return null;
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${
        import.meta.env.VITE_OMD_API_KEY
      }&s=${search}`
    );
    const data = await response.json();

    const movies = data.Search;
    // console.log(data);

    const mappedMovies = movies?.map(
      (movie: { imdbID: any; Title: any; Year: any; Poster: any }) => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster,
      })
    );
    return mappedMovies;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
    console.log(error);
  }
};
