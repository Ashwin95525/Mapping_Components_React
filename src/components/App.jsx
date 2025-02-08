import React from "react";
import Box from "./Box";
import emojipedia from "../emojipedia";

function PassToBox(prop) {
  return (
    <Box
      key={prop.id}
      emoji={prop.emoji}
      name={prop.name}
      meaning={prop.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(PassToBox)}</dl>
    </div>
  );
}

export default App;
