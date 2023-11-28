import React from "react";
import Button from "./Components/Button"; // Use PascalCase for component names

function App() {
  return (
    <div>
      {/* Using the Button component */}
      <Button onClick={() => console.log('clicked')}>My Button</Button>
    </div>
  );
}

export default App;
