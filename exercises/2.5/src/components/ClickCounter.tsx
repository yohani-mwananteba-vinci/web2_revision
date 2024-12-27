import { useState } from "react";
import "./ClickCounter.css";

interface ClickCounterProps {
  title: string;
  msgOnClick: string;   // C: Should be a optional prop
  msgOnMouse: string;   // C: Should be a optional prop
}

// C: 
//  1) You can define the value of msgOnClick and msgOnMouse in the destructuring of the function
// (Example: const ClickCounter = ({ title, msgOnClick = "You are a master in the art of clicking !", msgOnMouse = "Please click on me now !" }: ClickCounterProps)
//  2) You should export the entire div of App.tsx that was concened the button
//  3) <p>{count < 10 ? `` : `${msgOnClick}`}</p> should be {count >= 10 ? <p>{on10ClickMessage}</p> : null}
//  4) HandleClickCounter function is not necessary you could just use the onMouseEnter and onMouseLeave
// (Example: <button ... onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>

const ClickCounter = ({ title, msgOnClick, msgOnMouse }: ClickCounterProps) => {
  const [count, setCount] = useState(0);

  const [msgCounter, setMsgCounter] = useState(false);

  // C: Not necessary
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
