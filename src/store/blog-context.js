import React from "react";

const BlogContext=React.createContext({
    categories:[],
    updateCategory:()=>{}
});

export default BlogContext;