import Movie from "../types";

interface CinemaProps {
  name: string;
  movies: Movie[];
}

// display all the information associated with the first & second cinema
const Cinema = (props: CinemaProps) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <ul>
        {props.movies.map((movie) => (
          <li key={movie.title}>
            <strong>{movie.title}</strong> - Réalisateur : {movie.director}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cinema;
