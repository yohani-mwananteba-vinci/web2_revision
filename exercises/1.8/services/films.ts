import path from "node:path";

import { Film, NewFilm } from "../types";

import { serialize, parse } from "../utils/json";

const jsonDbPath = path.join(__dirname, "/../data/films.json");

const defaultFilms: Film[] = [
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

//C : OK but more easy way to write it
// Read all films, filtered by minimum-duration if the query param exists
function readAllFilms(minDuration: number): Film[] {
  const films = parse(jsonDbPath, defaultFilms);

  if (!minDuration) {
    return films;
  }

  const minDurationNumber = Number(minDuration);

  const filteredFilms = films.filter((film) => {
    return film.duration >= minDurationNumber;
  });

  return filteredFilms;
}

//C : OK but more easy way to write it:
/*
  const readAll = (minimumDuration: number | undefined = undefined): Film[] => {
    const films = parse(jsonDbPath, defaultFilms);
    return minimumDuration
      ? films.filter((film) => film.duration >= minimumDuration)
      : films;
  };
*/

// Read a film by id
function readOneFilm(id: number): Film | undefined {
  const films = parse(jsonDbPath, defaultFilms);

  const film = films.find((film) => film.id === id);  //C : OK but you could just return this line

  if (film === undefined) {
    return undefined;
  }

  return film;
}

// Create a new film
function createOneFilm(newFilm: NewFilm): Film | undefined {
  const films = parse(jsonDbPath, defaultFilms);

  const existingFilm = films.find(
    (film) =>
      film.title.toLowerCase() === newFilm.title.toLowerCase() &&
      film.director.toLowerCase() === newFilm.director.toLowerCase()
  );

  if (existingFilm) {
    return undefined;
  }

  //C: a function to get the next id whould be better (nextId = getNextId(films))
  const nextId =
    films.reduce((acc, film) => (film.id > acc ? film.id : acc), 0) + 1;

  const addedFilm: Film = { id: nextId, ...newFilm };

  films.push(addedFilm);

  serialize(jsonDbPath, films);

  return addedFilm;
}

// Delete a film by id
function deleteOneFilm(filmId: number): Film | undefined {
  const films = parse(jsonDbPath, defaultFilms);

  const index = films.findIndex((film) => film.id === filmId);

  if (index === -1) {
    return undefined;
  }

  const deletedElements = films.splice(index, 1);
  serialize(jsonDbPath, films);
  return deletedElements[0];

  //C: alternative way to write it:
  /*
    const [film] = films.splice(index, 1);
    serialize(jsonDbPath, films);
    return film;
  */
}

// Update on or multiple props of a film
function updateOneFilm(
  filmId: number,
  newFilm: Partial<NewFilm>
): Film | undefined {
  const films = parse(jsonDbPath, defaultFilms);

  const film = films.find((film) => film.id === filmId);

  if (!film) {
    return undefined;
  }

  if (newFilm.title) {
    film.title = newFilm.title!; // the router already checks for the presence of title
  }

  if (newFilm.director) {
    film.director = newFilm.director!;
  }

  if (newFilm.duration) {
    film.duration = newFilm.duration!;
  }

  if (newFilm.budget) {
    film.budget = newFilm.budget!;
  }
  if (newFilm.description) {
    film.description = newFilm.description!;
  }
  if (newFilm.imageUrl) {
    film.imageUrl = newFilm.imageUrl!;
  }
  //C: Ok but you could just write:   const film = { ...films[index], ...updatedFilm };

  serialize(jsonDbPath, films);
  return film;
}

// Update a film only if all properties are given or create it if it does not exist and the id is not existant
function putOneFilm(
  filmId: number,
  newFilm: Partial<NewFilm>
): Film | undefined {
  const films = parse(jsonDbPath, defaultFilms);

  const existingfilm = films.find((film) => film.id === filmId);

  if (existingfilm) {
    return updateOneFilm(filmId, newFilm);
  }

  return createOneFilm(newFilm as NewFilm);
}
//C: Ok but you could be better write it like this:
/*
  const updateOrCreateOne = (
    id: number,
    updatedFilm: NewFilm
  ): Film | undefined => {
    const films = parse(jsonDbPath, defaultFilms);

    const index = films.findIndex((film) => film.id === id);

    if (index === -1) {
      return createOne(updatedFilm);
    }

    const film = { ...films[index], ...updatedFilm };

    films[index] = film;
    serialize(jsonDbPath, films);

    return film;
};

*/

// C: Missing a function to get the next id

export {
  readAllFilms,
  readOneFilm,
  createOneFilm,
  deleteOneFilm,
  updateOneFilm,
  putOneFilm,
};
