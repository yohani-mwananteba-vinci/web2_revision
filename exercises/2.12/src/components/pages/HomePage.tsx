import { Link, useMatch } from "react-router-dom";
import PageTitle from "../PageTitle";
import { Movie } from "../../types";
import MovieCard from "../MovieCard";

// C: You should use "const { movies }: MovieContext = useOutletContext();" to get the movies from the context.
const favouriteMovies : Movie[] = [
  {
    id: 1,
    title: "Shang-Chi and the Legend of the Ten Rings",
    director: "Destin Daniel Cretton",
    duration: 132,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/74/Shang-Chi_and_the_Legend_of_the_Ten_Rings_poster.jpeg",
    description:
      "Shang-Chi, the master of unarmed weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.",
    budget: 150,
  },
  {
    id: 3,
    title: "Summer Wars",
    director: "Mamoru Hosoda",
    duration: 114,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/7d/Summer_Wars_poster.jpg",
    description:
      "A young math genius solves a complex equation and inadvertently puts a virtual world's artificial intelligence in a position to destroy Earth.",
    budget: 18.7,
  },
  {
    id: 5,
    title: "her",
    director: "Spike Jonze",
    duration: 126,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/44/Her2013Poster.jpg",
    description:
      "In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.",
    budget: 23,
  },
];

//C : You should create a component called moviePage that will display the details of a movie. This component should be displayed when the user navigates to the /movies/:movieId route. The movieId parameter should be used to find the movie to display.
const MoviePage = () => {
  const match = useMatch("/movies/:movieId");
  const movieId = match?.params.movieId;
  if (!movieId) return <p>Movie not found</p>;

  const movie = favouriteMovies.find((movie) => movie.id.toString() === movieId);   //C: You should use movies in a context to retrieve the movie with the given id. (see above)
  if (!movie) return <p>Movie not found</p>;

  return (
    <div>
      <MovieCard movie={movie} />
    </div>
  );
};

//C: You should create a component "MovieTitleList" that will display the list of favorite movies.
const HomePage = () => {
  return (
    <div>
      <PageTitle title="myMovies" />
      <h1>
        Welcome to myMovies, a site where you can find info about cinemas,
        movies...
      </h1>
      <table>
        <thead>
          <tr>
            <th>Your favorite movies</th>
          </tr>
        </thead>
        <tbody>
          {favouriteMovies.map((film) => (
            <tr key={film.id}>
              <td>
                <Link key={film.id} to={`/movies/${film.id}`} style={{ display: "block" }}>
                  {film.title}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default HomePage;
export { MoviePage };
