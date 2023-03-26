import UserContext from "./user-context";

const UserProvider = (props) => {
    return <UserContext.Provider value={userContext}>
        {props.children}
    </UserContext.Provider>;
};

export default UserProvider;
