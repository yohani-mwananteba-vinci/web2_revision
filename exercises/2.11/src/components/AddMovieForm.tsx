import { SyntheticEvent, useState } from "react";
import { Movie } from "../types";
import "./AddMovieForm.css";
import { useNavigate } from "react-router-dom";

interface AddMovieFormProps {
  onMovieAdded: (movie: Movie) => void;
}

const AddMovieForm = ({ onMovieAdded }: AddMovieFormProps) => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [duration, setDuration] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState(0);

  // Navigate is is a function that allows you to navigate to a different route.
  const navigate = useNavigate();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    onMovieAdded({ title, director, duration, imageUrl, description, budget });
    setTitle("");
    setDirector("");
    setDuration(0);
    setImageUrl("");
    setDescription("");
    setBudget(0);
    navigate("/movie-list");  // We navigate to the movie-list page after adding a movie.
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Titre :</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Réalisateur :</label>
        <input
          type="text"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Durée :</label>
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(parseInt(e.target.value))}
          required
        />
      </div>
      <div>
        <label>URL de l'image :</label>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>
      <div>
        <label>Description :</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Budget :</label>
        <input
          type="number"
          value={budget}
          onChange={(e) => setBudget(parseInt(e.target.value))}
        />
      </div>
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default AddMovieForm;
