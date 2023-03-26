import BlogContext from "./blog-context";

const BlogProvider = (props) => {
    return <UserContext.Provider value={BlogContext}>
        {props.children}
    </UserContext.Provider>;
};

export default BlogProvider;
