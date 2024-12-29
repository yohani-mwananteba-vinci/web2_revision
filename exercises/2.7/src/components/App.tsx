import { useState, SyntheticEvent } from "react";
import "./App.css";
import FilmDetails from "./FilmDetails";
import Film from "../types";

const favouriteFilms = [
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
    id: 2,
    title: "The Matrix",
    director: "Lana Wachowski, Lilly Wachowski",
    duration: 136,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    budget: 63,
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
    id: 4,
    title: "The Meyerowitz Stories",
    director: "Noah Baumbach",
    duration: 112,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/af/The_Meyerowitz_Stories.png",
    description:
      "An estranged family gathers together in New York City for an event celebrating the artistic work of their father.",
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

// C: Ok but you should have a component for the form (AddFilmForm) and a component for the list of films (FilmList)
function App() {
  const [title, setTitle] = useState("");

  const [director, setDirector] = useState("");

  const [duration, setDuration] = useState(0);

  const [imageUrl, setImageUrl] = useState("");

  const [description, setDescription] = useState("");

  const [budget, setBudget] = useState(0);

  const [films, setFilms] = useState(favouriteFilms);

  //C: Ok but you could handleSubmit to handle all the inputs in one function
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    console.log(
      "submit:",
      title,
      director,
      duration,
      imageUrl,
      description,
      budget
    );

    const newFilm = {
      id: nextFilmId(films),
      title: title,
      director: director,
      duration: duration,
      imageUrl: imageUrl,
      description: description,
      budget: budget,
    };

    console.log(newFilm);

    setFilms([...films, newFilm]);

    console.log(films);
  };

  //C: No need to have a function for each input, you can use OnChange on the input directly
  // Example:           
  //  <input onChange={(e) => setTitle(e.target.value)} />                  => Change the title
  //  <input onChange={(e) => setDuration(parseInt(e.target.value))} />     => Change the duration

  const handleTitleChange = (e: SyntheticEvent) => {
    const titleInput = e.target as HTMLInputElement;
    console.log("change in titleInput:", titleInput.value);
    setTitle(titleInput.value);
  };

  const handleDirectorChange = (e: SyntheticEvent) => {
    const directorInput = e.target as HTMLInputElement;
    console.log("change in directorInput:", directorInput.value);
    setDirector(directorInput.value);
  };

  const handleDurationChange = (e: SyntheticEvent) => {
    const durationInput = e.target as HTMLInputElement;
    console.log("change in durationInput:", durationInput.value);
    setDuration(durationInput.valueAsNumber);
  };

  const handleImageUrlChange = (e: SyntheticEvent) => {
    const imageUrlInput = e.target as HTMLInputElement;
    console.log("change in imageUrlInput:", imageUrlInput.value);
    setImageUrl(imageUrlInput.value);
  };

  const handleDescriptionChange = (e: SyntheticEvent) => {
    const descriptionInput = e.target as HTMLInputElement;
    console.log("change in descriptionInput:", descriptionInput.value);
    setDescription(descriptionInput.value);
  };

  const handleBudgetChange = (e: SyntheticEvent) => {
    const budgetInput = e.target as HTMLInputElement;
    console.log("change in budgetInput:", budgetInput.value);
    setBudget(budgetInput.valueAsNumber);
  };

  //H: !!!! <FilmDetails films={films} /> instead of <FilmDetails films={defaultFilms} /> !!!!
  // => if you don't do this, the default films will be displayed instead of the new films even if you add new films
  return (
    <>
      <div>
        <h1>Table Films</h1>
        <FilmDetails films={films} />
      </div>

      <div>
        <h1>Ajouter un film:</h1>
        <br />

        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Film</label>
          <input
            value={title}
            type="text"
            id="title"
            name="title"
            onChange={handleTitleChange}
            required
          />
          <br />

          <label htmlFor="director">Director</label>
          <input
            value={director}
            type="text"
            id="director"
            name="director"
            onChange={handleDirectorChange}
            required
          />
          <br />

          <label htmlFor="duration">Duration</label>
          <input
            value={duration}
            type="number"
            id="duration"
            name="duration"
            onChange={handleDurationChange}
            required
          />
          <br />

          <label htmlFor="imageUrl">Image</label>
          <input
            value={imageUrl}
            type="url"
            id="imageUrl"
            name="imageUrl"
            onChange={handleImageUrlChange}
          />
          <br />

          <label htmlFor="description">Description</label>
          <input
            value={description}
            type="text"
            id="description"
            name="description"
            onChange={handleDescriptionChange}
          />

          <label htmlFor="budget">Budget</label>
          <input
            value={budget}
            type="number"
            id="budget"
            name="budget"
            onChange={handleBudgetChange}
          />
          <br />

          <button type="submit">Ajouter</button>
        </form>
      </div>
    </>
  );
}

const nextFilmId = (films: Film[]) => {
  return films.reduce((maxId, film) => Math.max(maxId, film.id), 0) + 1;
};

export default App;
