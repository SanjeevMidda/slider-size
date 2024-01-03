import React from "react";
import { useState } from "react";

const Text = ({ initialFontSize, content }) => {
  const [fontSize, setFontSize] = useState(initialFontSize);

  let styles = {
    fontSize: `${fontSize}px`,
  };

  return (
    <div className="sliderContainer">
      <div className="sliderContainer">
        <input
          type="range"
          min="10"
          max="200"
          className="slider"
          value={fontSize}
          onChange={(e) => setFontSize(e.target.value)}
        />
      </div>
      <div className="contentContainer">
        <h1 style={styles}>{content}</h1>
      </div>
    </div>
  );
};

export default Text;
