import { useState } from "react";
import { Movie } from "../types";

interface MovieItemProps {
  movie: Movie;
}

const MovieItem = ({ movie }: MovieItemProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClickMovie = () => {
    console.log("clicked");
    setIsClicked(isClicked ? false : true);
    console.log(isClicked);
  };

  return (
    <div key={movie.title} onClick={() => handleClickMovie()}>
      <strong>{movie.title}</strong> - Réalisateur : {movie.director}
      {isClicked ? <p>{movie.description}</p> : null}
    </div>
  );
};

export default MovieItem;
