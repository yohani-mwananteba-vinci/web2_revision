//import { UUIDTypes, v4 as uuidv4 } from 'uuid';

interface Film {
  id: number;
  title: string;
  director: string;
  duration: number;
  budget?: number;
  description?: string;
  imageUrl?: string;
}

type NewFilm = Omit<Film, "id">;

interface Text {
  id: string;
  content: string;
  level: Level.Easy | Level.Medium | Level.Hard;
}

enum Level {
  Easy = "easy",
  Medium = "medium",
  Hard = "hard"
}

type NewText = Omit<Text, "id">;

export { Film, NewFilm, Text, NewText, Level };
