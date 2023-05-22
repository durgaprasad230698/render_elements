import React from "react";

const App = () => {
  return(
    <div className="Render Element">
    <h1>Time {new Date().toLocaleTimeString()}</h1>
    <p>
      This is called Render method the code will be execute if you can refresh the time will be changes and
      After changes index.js file time will be continues running
    </p>
    </div>
  );
};

export default App;