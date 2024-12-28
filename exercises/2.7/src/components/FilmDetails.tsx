import Film from "../types";

interface FilmDetailsProps {
  films: Film[];
}

const FilmDetails = ({ films }: FilmDetailsProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Director</th>
          <th>Duration (in minutes)</th>
          <th>Image</th>
          <th>Description</th>
          <th>Budget</th>
        </tr>
      </thead>
      <tbody>
        {films.map((f) => (
          <tr key={f.id}>
            <td>{f.title}</td>
            <td>{f.director}</td>
            <td>{f.duration}</td>
            <td>
              <img src={f.imageUrl} alt="/" />
            </td>
            <td>{f.description ? f.description : "X"}</td>
            <td>{f.budget ? f.budget : "X"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FilmDetails;
