import "./App.css";
import Backgroundbox from "./backgroundBox";

function App() {
  const colors = [
    { name: "red" },
    { name: "green" },
    { name: "blue" },
    { name: "yellow" },
    { name: "violet" },
  ];

  return (
    <>
      <Backgroundbox colors={colors} />
    </>
  );
}

export default App;
