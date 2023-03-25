import React, { useState, useEffect } from "react"
import Login from "./components/Login/Login";
import MainHeader from "./components/Main Header/MainHeader";
import Blogs from "./components/Blogs/Blogs";

function App() {
  const [isLoggedIn, setIsLoggedIn]=useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  return (
    <React.Fragment>
      <MainHeader/>
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Blogs/>}
      </main>      
    </React.Fragment>
  );
}

export default App;
