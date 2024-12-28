import { useState } from "react";
import Color from "../types";

interface BackgroundBoxProps {
  colors: Color[];
}

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

export default BackgroundBox;
