import { Movie } from "../types";
import MovieItem from "./MovieItem";

interface CinemaProps {
  name: string;
  movies: Movie[];    // C: You can't have a MovieItem[] here because MovieItem is a component, not a type
}

const Cinema = ({ name, movies }: CinemaProps) => (
  <div>
    <h2>{name}</h2>
    <ul>
      {movies.map((m) => (
        <MovieItem key={m.title} movie={m} />
      ))}
    </ul>
  </div>
);
// C: We use the MovieItem component to display the list of movies for a given cinema.

export default Cinema;
