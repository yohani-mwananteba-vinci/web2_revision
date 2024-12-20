import path from "node:path";

import { Text, NewText, Level} from "../types";   //C: Level is useless here

import { serialize, parse } from "../utils/json";

import { v4 as uuidv4 } from "uuid";

const jsonDbPath = path.join(__dirname, "/../data/texts.json");

const defaultTexts: Text[] = [
  {
    id: uuidv4().toString(),            //C: Could be just a string
    content: "This is an easy text.",
    level: Level.Easy,                  //C: Could be just "easy"
  },
  {
    id: uuidv4().toString(),            //C: Could be just a string
    content: "This is a medium text.",
    level: Level.Medium,                //C: Could be just "medium"
  },
  {
    id: uuidv4().toString(),            //C: Could be just a string
    content: "This is a hard text.",
    level: Level.Hard,                  //C: Could be just "hard"
  },
];

const readAll = (level: string): Text[] | undefined => {
  const texts = parse(jsonDbPath, defaultTexts);

  //C: this solution is already implemented in the return
  if (!level) {
    return texts;
  }

  //C: No need to check the level here, it's must be checked in /routes/texts.ts (code 400)
  if (!checkLevel(level)) {
    return undefined;
  }

  return level ? texts.filter((text) => text.level.toLowerCase() === level.toLowerCase()) : texts;
};

const readOne = (id: string): Text | undefined => {
  const texts = parse(jsonDbPath, defaultTexts);
  return texts.find((text) => text.id === id);
};

const createOne = (newText: NewText): Text | undefined => {
  const texts = parse(jsonDbPath, defaultTexts);

  const existingText = texts.find(
    (text) =>
    text.content.toLowerCase() === newText.content.toLowerCase() &&
    text.level.toLowerCase() === newText.level.toLowerCase()    //C: level must be check in /routes/texts.ts (code 400)
);
console.log(existingText);

  if (existingText) {
    return undefined;
  }

  //C: level must be check in /routes/texts.ts (code 400)
  if (!checkLevel(newText.level)) {
    return undefined;
  }

  const text = { id: uuidv4(), ...newText };

  texts.push(text);
  serialize(jsonDbPath, texts);

  return text;
};

const deleteOne = (id: string): Text | undefined => {
  const texts = parse(jsonDbPath, defaultTexts);

  const index = texts.findIndex((text) => text.id === id);

  if (index === -1) {
    return undefined;
  }

  const [text] = texts.splice(index, 1);
  serialize(jsonDbPath, texts);

  return text;
};


//Should be just updatedOne
const updateOrCreateOne = (id: string, updatedText: NewText): Text | undefined => {
  const texts = parse(jsonDbPath, defaultTexts);

  const index = texts.findIndex((text) => text.id === id);

  if (index === -1) {
    return createOne(updatedText);    //C: Should return undefined
  }

  const text = { ...texts[index], ...updatedText };

  texts[index] = text;
  serialize(jsonDbPath, texts);

  return text;
};

//C: This function is not supposed to be used here (code 400 = routes/texts.ts)
const checkLevel = (level: string): boolean => {
  return level.toLowerCase() === "easy" || level.toLowerCase() === "medium" || level.toLowerCase() === "hard";
};

// const updateOne = (
//   id: string,
//   updatedText: Partial<NewText>
// ): Text | undefined => {
//   const texts = parse(jsonDbPath, defaultTexts);

//   const index = texts.findIndex((text) => text.id === id);

//   if (index === -1) {
//     return undefined;
//   }

//   const text = { ...texts[index], ...updatedText };

//   texts[index] = text;
//   serialize(jsonDbPath, texts);

//   return text;
// };

export { 
    readAll,
    readOne,
    createOne,
    deleteOne,
    // updateOne,
    updateOrCreateOne 
};
