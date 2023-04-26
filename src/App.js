import React, { useState, useEffect } from "react";
import Login from "./components/Login/Login";
import MainHeader from "./components/Main Header/MainHeader";
import Blogs from "./components/Blogs/Blogs";
import BlogProvider from "./store/BlogProvider";
import UserContext from "./store/use-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState();

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const tokenHandler = (token) => {
    setToken(token);
  };

  return (
    <UserContext.Provider value={{isLoggedIn:isLoggedIn}}>
      <BlogProvider>
        <MainHeader />
        <main>
          {!isLoggedIn && <Login onLogin={loginHandler} onPass={tokenHandler}/>}
          {isLoggedIn && <Blogs token={token}/>}
        </main>
      </BlogProvider>
    </UserContext.Provider>
  );
}

export default App;
