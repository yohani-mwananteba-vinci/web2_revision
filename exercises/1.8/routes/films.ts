import { Router } from "express";

import { NewFilm } from "../types";

import { containsOnlyExpectedKeys } from "../utils/validate";

import{ readAllFilms, readOneFilm, createOneFilm, deleteOneFilm, updateOneFilm } from "../services/films";

const router = Router();



const expectedKeys = [
  "title",
  "director",
  "duration",
  "budget",
  "description",
  "imageUrl",
];

// Read all films, filtered by minimum-duration if the query param exists
router.get("/", (req, res) => {
  const minDuration = Number(req.query["minimum-duration"]);

  if (minDuration && (isNaN(minDuration) || minDuration <= 1)) {
    return res.sendStatus(400);
  }
  
  const films = readAllFilms(minDuration);

  return res.send(films);
});

// Read a film by id
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.sendStatus(400);
  }

  const film = readOneFilm(id);

  if (!film) {
    return res.sendStatus(404);
  }

  return res.send(film);
});

// Create a new film
router.post("/", (req, res) => {
  const body: unknown = req.body;

  if (
    !body ||
    typeof body !== "object" ||
    !("title" in body) ||
    !("director" in body) ||
    !("duration" in body) ||
    typeof body.title !== "string" ||
    typeof body.director !== "string" ||
    typeof body.duration !== "number" ||
    !body.title.trim() ||
    !body.director.trim() ||
    body.duration <= 0 ||
    ("budget" in body &&
      (typeof body.budget !== "number" || body.budget <= 0)) ||
    ("description" in body &&
      (typeof body.description !== "string" || !body.description.trim())) ||
    ("imageUrl" in body &&
      (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
  ) {
    return res.sendStatus(400);
  }

  // Challenge of ex1.4 : To be complete, we should check that the keys of the body object are only the ones we expect
  if (!containsOnlyExpectedKeys(body, expectedKeys)) {
    return res.sendStatus(400);
  }
  // End of challenge

  const newFilm = body as NewFilm;

  const addedFilm = createOneFilm(newFilm);

  if(!addedFilm) {
    return res.sendStatus(409);
  }

  return res.json(addedFilm);
});

// Delete a film by id
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.sendStatus(400);
  }

  const deletedFilm = deleteOneFilm(id);

  if(!deleteOneFilm){
    return res.sendStatus(404);
  }

  return res.send(deletedFilm);
});

// Update on or multiple props of a film
router.patch("/:id", (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    return res.sendStatus(400);
  }

  const body: unknown = req.body;
  if (
    !body ||
    typeof body !== "object" ||
    Object.keys(body).length === 0 ||
    ("title" in body &&
      (typeof body.title !== "string" || !body.title.trim())) ||
    ("director" in body &&
      (typeof body.director !== "string" || !body.director.trim())) ||
    ("duration" in body &&
      (typeof body.duration !== "number" || body.duration <= 0)) ||
    ("budget" in body &&
      (typeof body.budget !== "number" || body.budget <= 0)) ||
    ("description" in body &&
      (typeof body.description !== "string" || !body.description.trim())) ||
    ("imageUrl" in body &&
      (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
  ) {
    return res.sendStatus(400);
  }

  // Challenge of ex1.6 : To be complete, we should check that the keys of the body object are only the ones we expect
  if (!containsOnlyExpectedKeys(body, expectedKeys)) {
    return res.sendStatus(400);
  }
  // End of challenge

  const { title, director, duration, budget, description, imageUrl } : Partial<NewFilm> = body;
  const updatedFilm = updateOneFilm(id, { title, director, duration, budget, description, imageUrl });
  if (!updatedFilm) {
    return res.sendStatus(404);
  }

  return res.send(updatedFilm);
});

// Update a film only if all properties are given or create it if it does not exist and the id is not existant
router.put("/:id", (req, res) => {
  const body: unknown = req.body;

  if (
    !body ||
    typeof body !== "object" ||
    !("title" in body) ||
    !("director" in body) ||
    !("duration" in body) ||
    typeof body.title !== "string" ||
    typeof body.director !== "string" ||
    typeof body.duration !== "number" ||
    !body.title.trim() ||
    !body.director.trim() ||
    body.duration <= 0 ||
    ("budget" in body &&
      (typeof body.budget !== "number" || body.budget <= 0)) ||
    ("description" in body &&
      (typeof body.description !== "string" || !body.description.trim())) ||
    ("imageUrl" in body &&
      (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
  ) {
    return res.sendStatus(400);
  }

  // Challenge of ex1.6 : To be complete, we should check that the keys of the body object are only the ones we expect
  if (!containsOnlyExpectedKeys(body, expectedKeys)) {
    return res.sendStatus(400);
  }

  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.sendStatus(400);
  }

  const newFilm = body as NewFilm;
  if(!readOneFilm(id)){
    const addedFilm = createOneFilm(newFilm);
    if (!addedFilm) 
      return res.sendStatus(409);
    return res.json(addedFilm); 
  }

  // Update the film

  //const updatedFilm = { ...films[indexOfFilmToUpdate], ...body } as Film;

  //films[indexOfFilmToUpdate] = updatedFilm;

  const updatedFilm = updateOneFilm(id, newFilm as Partial<NewFilm>);
  if (!updatedFilm) {
    return res.sendStatus(404);
  }

  return res.send(updatedFilm);
});

export default router;
