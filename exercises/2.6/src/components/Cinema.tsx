import { Movie } from "../types";
import MovieItem from "./MovieItem";

interface CinemaProps {
  name: string;
  movies: Movie[];
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

export default Cinema;
