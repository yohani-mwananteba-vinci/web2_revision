interface Text {
  id: string;
  content: string;
  level: Level.Easy | Level.Medium | Level.Hard;  //C: Better to use string literals -> "easy" | "medium" | "hard"
}

//C: enum is useless here, we can use string literals
enum Level {
  Easy = "easy",
  Medium = "medium",
  Hard = "hard"
}

type NewText = Omit<Text, "id">;

export { Text, NewText, Level };
