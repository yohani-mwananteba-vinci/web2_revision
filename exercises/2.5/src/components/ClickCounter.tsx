import { useState } from "react";
import "./ClickCounter.css";

interface ClickCounterProps {
  title: string;
  msgOnClick: string;
  msgOnMouse: string;
}

const ClickCounter = ({ title, msgOnClick, msgOnMouse }: ClickCounterProps) => {
  const [count, setCount] = useState(0);

  const [msgCounter, setMsgCounter] = useState(false);

  const handleClickCounter = () => {
    console.log(msgCounter ? `` : msgOnMouse);
    setMsgCounter(msgCounter ? !msgCounter : msgCounter)
  };

  return (
    <div>
      <h2>{title}</h2>
      <button 
        onClick={() => setCount((count) => count + 1)}
        onMouseEnter={() => handleClickCounter()}
        onMouseLeave={() => handleClickCounter()}
      >
        count is {count}
      </button>
      <p>{count < 10 ? `` : `${msgOnClick}`}</p>
    </div>
  );
};

export default ClickCounter;
