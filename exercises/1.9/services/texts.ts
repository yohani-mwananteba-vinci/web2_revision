import path from "node:path";

import { Text, NewText, Level} from "../types";

import { serialize, parse } from "../utils/json";

import { v4 as uuidv4 } from "uuid";

const jsonDbPath = path.join(__dirname, "/../data/texts.json");

const defaultTexts: Text[] = [
  {
    id: uuidv4().toString(),
    content: "This is an easy text.",
    level: Level.Easy,
  },
  {
    id: uuidv4().toString(),
    content: "This is a medium text.",
    level: Level.Medium,
  },
  {
    id: uuidv4().toString(),
    content: "This is a hard text.",
    level: Level.Hard,
  },
];

const readAll = (level: string): Text[] | undefined => {
  const texts = parse(jsonDbPath, defaultTexts);
  if (!level) {
    return texts;
  }

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
    text.level.toLowerCase() === newText.level.toLowerCase()
);
console.log(existingText);

  if (existingText) {
    return undefined;
  }

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


const updateOrCreateOne = (
  id: string,
  updatedText: NewText
): Text | undefined => {
  const texts = parse(jsonDbPath, defaultTexts);

  const index = texts.findIndex((text) => text.id === id);

  if (index === -1) {
    return createOne(updatedText);
  }

  const text = { ...texts[index], ...updatedText };

  texts[index] = text;
  serialize(jsonDbPath, texts);

  return text;
};

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
