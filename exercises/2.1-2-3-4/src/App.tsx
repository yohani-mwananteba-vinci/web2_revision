const App = () => {
  const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC DeBrouckère";

  const movie1 = {
    title: "HAIKYU-THE DUMPSTER BATTLE",
    director: "Susumu Mitsunaka",
  };
  const movie2 = {
    title: "GOODBYE JULIA ",
    director: "Mohamed Kordofani",
  };

  const cinema2Name = "UGC Toison d'Or";
  const movie3 = {
    title: "THE WATCHERS",
    director: "Ishana Night Shyamalan",
  };
  const movie4 = {
    title: "BAD BOYS: RIDE OR DIE",
    director: "Adil El Arbi, Bilall Fallah",
  };

  return (
    <div>
      <PageTitle title={pageTitle} />

      <Cinema name={cinema1Name} movie={movie1} movie2={movie2} />

      <Cinema name={cinema2Name} movie={movie3} movie2={movie4} />
    </div>
  );
};


// display page title
interface PageTitleProps {
  title : string;
}

const PageTitle = (props: PageTitleProps) => {
  return (
      <h1>{props.title}</h1>
  );
}


// display all the information associated with the first & second cinema
interface CinemaProps {
  name: string;
  movie: Movie;
  movie2: Movie;
}

interface Movie{
  title: string;
  director: string;
}

const Cinema = (props: CinemaProps) => {
  return (
      <div>
        <h2>{props.name}</h2>
        <ul>
          <li>
            <strong>{props.movie.title}</strong> - Réalisateur :{" "}
            {props.movie.director}
          </li>

          <li>
            <strong>{props.movie2.title}</strong> - Réalisateur :{" "}
            {props.movie2.director}
          </li>
        </ul>
      </div>
  );
}


export default App;
