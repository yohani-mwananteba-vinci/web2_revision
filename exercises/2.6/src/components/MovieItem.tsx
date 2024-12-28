import { useState } from "react";
import { Movie } from "../types";

// C:  MovieItem is just a functional component that takes a movie object as a prop and handles a click event to display the movie description. 
//     ( no need to put the properties of the movie here)
interface MovieItemProps {
  movie: Movie; 
}

// C: OK but could be improved (see below)
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

// C: Better solution
// const MovieItem = ({ movie }: MovieItemProps) => {
//     const [descriptionVisible, setDescriptionVisible] = useState(false);
//     return (
//       <li onClick={() => setDescriptionVisible(!descriptionVisible)}>
//         <p>
//           <strong>{movie.title}</strong> - Réalisateur : {movie.director}
//         </p>
//         <p>{descriptionVisible ? <i>{movie.description}</i> : null}</p>
//       </li>
//     );
//   };

export default MovieItem;
