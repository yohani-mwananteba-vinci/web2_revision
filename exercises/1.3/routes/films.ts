import { Router } from "express";

import { Film } from "../types";

import { NewFilm } from "../types";

const router = Router();

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

//READ ALL FILTERED : Read all the resources in the collection according to the given filter
router.get("/", (req, res) => {
  if (!req.query["minimum-duration"]) {
    // Cannot call req.query.minimum-duration as "-" is an operator
    return res.json(defaultFilms);
  }
  const durationMin = Number(req.query["minimum-duration"]);
  const filteredFilms = defaultFilms.filter((film) => {
    return film.duration >= durationMin;
  });
  return res.json(filteredFilms);
});

// READ ONE : Read the identified resource
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const film = defaultFilms.find((film) => film.id === id);
  if (!film) {
    return res.sendStatus(404);
  }
  return res.json(film);
});

// CREATE ONE : Create a resource based on query data
router.post("/", (req, res) => {
  console.log(req.body); // Log the request body for debugging
  const body: unknown = req.body;
  if (
    !body ||
    typeof body !== "object" ||
    !("title" in body) ||
    !("director" in body) ||
    !("duration" in body) ||
    // No need to check if the optional properties are in the body
    typeof body.title !== "string" ||
    typeof body.director !== "string" ||
    typeof body.duration !== "number" ||
    // No need to check the types of the optional properties
    !body.title.trim() ||
    !body.director.trim() ||
    body.duration <= 0
    // No need to check (here) the conditions for the optional properties
  ) {
    return res.json("Wrong minimum duration");
  }

  const { title, director, duration, imageUrl, description, budget } =
    body as NewFilm;
  // Partial<NewFilm> cannot be used here because some properties are required

  const nextId =
    defaultFilms.reduce(
      (maxId, film) => (film.id > maxId ? film.id : maxId),
      0
    ) + 1;

  const newFilm: Film = {
    id: nextId,
    title,
    director,
    duration,
    //All the optional properties must be checked HERE before assigning them
    imageUrl: imageUrl?.trim() || undefined,
    description: description?.trim() || undefined,
    budget: budget && budget > 0 ? budget : undefined,
  };

  defaultFilms.push(newFilm);
  return res.json(newFilm);
});

export default router;
