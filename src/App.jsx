import React from "react";

// Declaring the variable globally makes sure it renders only once.
const title = "React";

function App() {
  return (
    <div>
      <h1>Hello {title}</h1>
    </div>
  );
}

export default App;
