import Cinema from "./Cinema";
import PageTitle from "./PageTitle";
import Header from "./Header";
import Footer from "./Footer";

const App = () => {
  const logo = "https://plus.unsplash.com/premium_photo-1709412115697-6f43b567c283?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9nbyUyMGNpbmVtYXxlbnwwfHwwfHx8MA%3D%3D";
  
  const hChildren1 = "Bienvenue sur le site !";
  const fChildren1 = "@Yohani Mwana-Nteba"

  // const hChildren2 = 1527151762;
  // const fChildren2 = false;

  const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC DeBrouckère";

  const moviesCinema1 = [
    {
      title: "HAIKYU-THE DUMPSTER BATTLE",
      director: "Susumu Mitsunaka",
    },
    {
      title: "GOODBYE JULIA",
      director: "Mohamed Kordofani",
    },
    {
      title: "INCEPTION",
      director: "Christopher Nolan",
    },
    {
      title: "PARASITE",
      director: "Bong Joon-ho",
    },
  ];

  const cinema2Name = "UGC Toison d'Or";

  const moviesCinema2 = [
    {
      title: "THE WATCHERS",
      director: "Ishana Night Shyamalan",
    },
    {
      title: "BAD BOYS: RIDE OR DIE",
      director: "Adil El Arbi, Bilall Fallah",
    },
    {
      title: "TENET",
      director: "Christopher Nolan",
    },
    {
      title: "THE IRISHMAN",
      director: "Martin Scorsese",
    },
  ];

  return (
    <div>
      <Header logo={logo} children={hChildren1} />
      <PageTitle title={pageTitle} />

      <Cinema name={cinema1Name} movies={moviesCinema1} />

      <Cinema name={cinema2Name} movies={moviesCinema2} />
      <Footer logo={logo} children={fChildren1}/>
    </div>
  );
};

export default App;
