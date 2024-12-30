interface Movie {
  title: string;
  director: string;
  duration: number;
  imageUrl?: string;
  description?: string;
  budget?: number;
}

// C : SetMovies is useless here, we should remove it.
// C: This interface is used to define the shape of the context object that will be used in the MovieContextProvider component.
interface MovieContext {
  movies: Movie[];
  // setMovies: (movies: Movie[]) => void;
  onMovieAdded: (newMovie: Movie) => void;
}

export type { Movie, MovieContext };
