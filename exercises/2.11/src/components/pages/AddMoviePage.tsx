import { useOutletContext } from "react-router-dom";
import { MovieContext } from "../../types";
import PageTitle from "../PageTitle";
import AddMovieForm from "../AddMovieForm";

const AddMoviePage = () => {

    // C: This const is used to get the onMovieAdded function from the context object.
  const { onMovieAdded }: MovieContext = useOutletContext();

  return (
    <div>
      <PageTitle title="Adding a new Movie:" />
      <AddMovieForm onMovieAdded={onMovieAdded} />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default AddMoviePage;
