import { useState } from "react";
import Color from "../types";

// C: Interface is not needed, could just be a string array
interface BackgroundBoxProps {
  colors: Color[];
}

// C: Ok but could be simplified (see below)
const BackgroundBox = ({ colors }: BackgroundBoxProps) => {
  // Help: We use a number state to keep track of the current color index
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  // Help: We need to change the background color when the button is clicked
  const handleChangeBackground = () => {
    // H: prevIndex +1 will give us the next color index and % colors.length will make sure that we don't go out of bounds
    setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return (
    <div style={{ backgroundColor: colors[currentColorIndex].name }}>
      <button color="none" onClick={handleChangeBackground}>
        {colors[(currentColorIndex + 1) % colors.length].name}
      </button>
    </div>
  );
};

// C: Could be simplified to:
// const colors = ["red", "green", "blue", "yellow", "purple"];

// const ColorBox = () => {
//   const [currentColorIndex, setCurrentColorIndex] = useState(0);

//   return (
//     <div
//       className="color-box"
//       style={{ backgroundColor: colors[currentColorIndex] }}
//     >
//       <button className="color-box__button"
//         onClick={() => {
//           setCurrentColorIndex((currentColorIndex + 1) % colors.length);
//         }}
//       >
//         {colors[(currentColorIndex + 1) % colors.length]}
//       </button>
//       <h3>{colors[currentColorIndex]}</h3>
//     </div>
//   );

export default BackgroundBox;
