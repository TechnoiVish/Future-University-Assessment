import React, { useState } from "react";

const green = "#2AED2D";
const white = "#FFFFFF";
const Checkbox = () => {
  const [buttonColor, setButtonColor] = useState(white);

  function handleColorChange() {
    const newColor = buttonColor === green ? white : green;
    setButtonColor(newColor);
  }
  return (
    <div>
      <div
        className="rounded-full h-5 w-5 cursor-pointer border-2"
        style={{ backgroundColor: buttonColor }}
        color={buttonColor}
        onClick={handleColorChange}
      />
    </div>
  );
};

export default Checkbox;
