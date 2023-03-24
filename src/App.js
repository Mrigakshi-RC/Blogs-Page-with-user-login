import React, { useState } from "react"
import Login from "./components/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn]=useState(false);
  return (
    <React.Fragment>
      <main>
        {!isLoggedIn && <Login/>}
      </main>      
    </React.Fragment>
  );
}

export default App;
