import MovieListView from "../MovieListView";
import PageTitle from "../PageTitle";
import { MovieContext } from "../../types";
import { useOutletContext } from "react-router-dom";

const MovieListPage = () => {
  // C: You should move all the movies to the App component.
  // C: that consumes the MovieContext and passes the movies to the MovieListPage component.
  const { movies }: MovieContext = useOutletContext();

  //C: You should remove the AddMovieForm component in the AddMoviePage component.
  return (
    <div>
      <PageTitle title="My favorite movies" />

      <MovieListView movies={movies} />

      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default MovieListPage;
