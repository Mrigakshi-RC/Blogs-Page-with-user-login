import React from "react";
//use this just to store user info

const BlogContext=React.createContext({
    categories:[],
    updateCategory:()=>{}
});

export default BlogContext;