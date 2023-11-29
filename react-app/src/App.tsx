import React from "react";
import Alert from "./Components/alert";
import { useState } from "react";
import Button from "./Components/Button"; // Use PascalCase for component names

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>

      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My alertjj</Alert>}
      {/* Using the Button component */}
      <Button color="danger" onClick={() => setAlertVisibility(true)}>My Button</Button>
    </div>
  );
}

export default App;