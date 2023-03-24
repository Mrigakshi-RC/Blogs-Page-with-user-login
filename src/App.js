import React, { useState } from "react"
import Login from "./components/Login/Login";
import MainHeader from "./components/Main Header/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn]=useState(false);
  return (
    <React.Fragment>
      <MainHeader/>
      <main>
        {!isLoggedIn && <Login/>}
      </main>      
    </React.Fragment>
  );
}

export default App;
