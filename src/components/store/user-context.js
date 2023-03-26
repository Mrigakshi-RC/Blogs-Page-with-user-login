import React from "react";

const UserContext = React.createContext({
    userInfo: {},
    authToken: ""
});

export default UserContext;