import { Router } from "express";

import { Level, NewText } from "../types";

import { containsOnlyExpectedKeys } from "../utils/validate";

import {
  createOne,
  deleteOne,
  readAll,
  readOne,
  // updateOne,
    updateOrCreateOne,
} from "../services/texts";

const router = Router();

const expectedKeys = ["content", "level"];

// Read all texts, filtered by level if the query param exists
router.get("/", (req, res) => {
  const level = "level" in req.query ? req.query["level"] : undefined;

  if (!level && level === "") {
    return res.sendStatus(400);
  }

  const filteredText = readAll(level as Level);

  if (filteredText === undefined) {
    return res.sendStatus(404);
  }

  return res.send(filteredText);
});

// Read a text by id
router.get("/:id", (req, res) => {
  const id = String(req.params.id).trim();
  // console.log(id);
  if (!id || id === "") {
    return res.sendStatus(400);
  }

  const text = readOne(id);

  if (text === undefined) {
    return res.sendStatus(404);
  }

  return res.send(text);
});

// Create a new text
router.post("/", (req, res) => {
  const body: unknown = req.body;

  if (
    !body ||
    typeof body !== "object" ||
    !("content" in body) ||
    !("level" in body) ||
    typeof body.content !== "string" ||
    typeof body.level !== "string" ||
    !body.content.trim() ||
    !body.level.trim() ||
    (body.level.toLowerCase() !== "easy" &&
      body.level.toLowerCase() !== "medium" &&
      body.level.toLowerCase() !== "hard")
  ) {
    return res.sendStatus(400);
  }

  // Challenge of ex1.4 : To be complete, we should check that the keys of the body object are only the ones we expect
  if (!containsOnlyExpectedKeys(body, expectedKeys)) {
    return res.sendStatus(400);
  }
  // End of challenge

  const newText = body as NewText;

  const addedText = createOne(newText);
  //   console.log(addedText);

  if (!addedText) {
    return res.sendStatus(409);
  }

  return res.json(addedText);
});

// Delete a text by id
router.delete("/:id", (req, res) => {
  const id = String(req.params.id).trim();

  if (!id || id === "") {
    return res.sendStatus(400);
  }

  const deletedText = deleteOne(id);

  if (!deletedText) {
    return res.sendStatus(404);
  }

  return res.send(deletedText);
});

// // Update on or multiple props of a text
// router.patch("/:id", (req, res) => {
//   const id = String(req.params.id).trim();

//   if (!id || id === "") {
//     return res.sendStatus(400);
//   }

//   const body: unknown = req.body;

//   if (
//     !body ||
//     typeof body !== "object" ||
//     ("content" in body &&
//       (typeof body.content !== "string" || !body.content.trim())) ||
//     ("level" in body &&
//       (typeof body.level !== "string" ||
//         !body.level.trim() ||
//         (body.level.toLowerCase() !== "easy" &&
//           body.level.toLowerCase() !== "medium" &&
//           body.level.toLowerCase() !== "hard")))
//   ) {
//     return res.sendStatus(400);
//   }

//   // Challenge of ex1.6 : To be complete, we should check that the keys of the body object are only the ones we expect
//   if (!containsOnlyExpectedKeys(body, expectedKeys)) {
//     return res.sendStatus(400);
//   }
//   // End of challenge

//   const updatedText = updateOne(id, body as Partial<NewText>);

//   if (!updatedText) {
//     return res.sendStatus(404);
//   }

//   return res.send(updatedText);
// });

// Update a text only if all properties are given or create it if it does not exist and the id is not existant
router.put("/:id", (req, res) => {
  const body: unknown = req.body;

  if (
    !body ||
    typeof body !== "object" ||
    ("content" in body &&
      (typeof body.content !== "string" || !body.content.trim())) ||
    ("level" in body &&
      (typeof body.level !== "string" ||
        !body.level.trim() ||
        (body.level.toLowerCase() !== "easy" &&
          body.level.toLowerCase() !== "medium" &&
          body.level.toLowerCase() !== "hard")))
  ) {
    return res.sendStatus(400);
  }

  // Challenge of ex1.6 : To be complete, we should check that the keys of the body object are only the ones we expect
  if (!containsOnlyExpectedKeys(body, expectedKeys)) {
    return res.sendStatus(400);
  }

  const id = String(req.params.id).trim();

  if (!id || id === "") {
    return res.sendStatus(400);
  }

  const createdOrUpdatedText = updateOrCreateOne(id, body as NewText);

  if (!createdOrUpdatedText) {
    return res.sendStatus(409); // Text already exists
  }

  return res.send(createdOrUpdatedText);
});

export default router;
