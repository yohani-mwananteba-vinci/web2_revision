// Please refactor this code so that two new components can :
//     display the page title
//     display all the information associated with the first cinema
//     display all the information associated with the second cinema

const App = () => {
  // ... for const definitions
  const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC DeBrouckère";
  const cinema1Movie1Title = "Film 1 - DeBrouckère";
  const cinema1Movie1Director = "Director A";
  const cinema1Movie2Title = "Film 2 - DeBrouckère";
  const cinema1Movie2Director = "Director B";

  const cinema2Name = "UGC Toison d'Or";
  const cinema2Movie1Title = "Film 1 - Toison d'Or";
  const cinema2Movie1Director = "Director C";
  const cinema2Movie2Title = "Film 2 - Toison d'Or";
  const cinema2Movie2Director = "Director D";


  return (
    <div>
      <PageTitle title={pageTitle} />
      <Cinema 
        name={cinema1Name}
        movie1Title={cinema1Movie1Title}
        movie1Director={cinema1Movie1Director}
        movie2Title={cinema1Movie2Title}
        movie2Director={cinema1Movie2Director}
      />

      <Cinema 
        name={cinema2Name}
        movie1Title={cinema2Movie1Title}
        movie1Director={cinema2Movie1Director}
        movie2Title={cinema2Movie2Title}
        movie2Director={cinema2Movie2Director}
      />
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
  movie1Title: string
  movie1Director: string;
  movie2Title: string
  movie2Director: string;
}


const Cinema = (props: CinemaProps) => {
  return (
      <div>
        <h2>{props.name}</h2>
        <ul>
          <li>
            <strong>{props.movie1Title}</strong> - Réalisateur :{" "}
            {props.movie1Director}
          </li>

          <li>
            <strong>{props.movie2Title}</strong> - Réalisateur :{" "}
            {props.movie2Director}
          </li>
        </ul>
      </div>
  );
}

export default App;
