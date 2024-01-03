import { useState } from "react";
import "./index.css";
import Text from "./components/Text";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Text initialFontSize={100} content="🐭" />
        <Text initialFontSize={200} content="wake" />
        <Text initialFontSize={30} content="UP!!!!" />
      </div>
    </div>
  );
}

export default App;
