import React, { useState } from "react";

function Selection(props) {
  const [background, setBackground] = useState({ background: "" });
  const updateSelectionStyle = (newBackground) => {
    setBackground(newBackground);
  };
  return (
    <div>
      <div
        style={{
          border: "2px solid white",
          color: "white",
          borderRadius: "5px",
          width: "30vw",
          textAlign: "center",
          height: "300px",
          background: background.background,
        }}
        className="fix-box"
        onClick={() => props.applyColor(updateSelectionStyle)}
      >
        <h3>Selection</h3>
      </div>
    </div>
  );
}

export default Selection;
