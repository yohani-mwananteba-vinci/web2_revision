interface Movie {
  id: number;
  title: string;
  director: string;
  duration: number;
  imageUrl?: string;
  description?: string;
  budget?: number;
}

interface MovieContext {
  movies: Movie[];
  onMovieAdded: (newMovie: Movie) => void;
}

// C: Missing a NewMovie type (omit id)

export type { Movie, MovieContext };
