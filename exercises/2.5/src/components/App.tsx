import ClickCounter from "./ClickCounter.tsx";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";


// C: You should have export the entire div "card" in ClickCounter.tsx (and adapt the css)
function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <ClickCounter
          title="Click enough times and you'll get a reward !"
          msgOnClick="You are a master in the art of clicking !"
          msgOnMouse="Please click on me now !"
        />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
