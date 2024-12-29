interface Film {
  id: number;   // C: the id was not necessary
  title: string;
  director: string;
  duration: number;
  imageUrl?: string;
  description?: string;
  budget?: number;
}

export default Film;
