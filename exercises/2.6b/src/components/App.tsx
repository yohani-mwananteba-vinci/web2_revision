import "./App.css";
import Backgroundbox from "./backgroundBox";

function App() {
  //C: 
  //  - Should be in Backgroundbox component
  //  - Could just be a string array

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
