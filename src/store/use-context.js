import React from "react";
//use this just to store user info

const UserContext=React.createContext({
    isLoggedIn:false
});

export default UserContext;