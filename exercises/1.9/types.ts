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

export { Text, NewText, Level };
