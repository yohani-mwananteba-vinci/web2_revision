import { useState } from "react";
import "./ClickCounter.css";

interface ClickCounterProps {
  title: string;
  message: string;
}

const ClickCounter = ({ title, message }: ClickCounterProps) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{title}</h2>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>{count < 10 ? `` : `${message}`}</p>
    </div>
  );
};

export default ClickCounter;
