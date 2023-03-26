import UserContext from "./user-context";

const UserProvider = (props) => {
    return <UserContext.Provider value={cartContext}>
        {props.children}
    </UserContext.Provider>;
};

export default UserProvider;
