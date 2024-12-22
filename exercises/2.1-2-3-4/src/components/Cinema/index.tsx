import Movie from "../../types";

interface CinemaProps {
  name: string;
  movies: Movie[];
}

// // C: Movie is not a react component, it's just a type (Should be in a file types.ts + import it)
// interface Movie {
//   title: string;
//   director: string;
// }

// display all the information associated with the first & second cinema
const Cinema = (props: CinemaProps) => {
  //C: return is not necessary
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
