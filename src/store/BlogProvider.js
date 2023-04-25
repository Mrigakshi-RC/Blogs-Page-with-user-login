import { useState } from "react";
import BlogContext from "./blog-context";

const defaultBlogState ={
    categories:[]
};

const BlogProvider = (props) => {
    const [categoryState,setCategory]=useState();
    const updateCategory=value=>{
        setCategory(value);
    }
    const blogContext = {
        categories: categoryState,
        updateCategory:updateCategory
    }
    return <BlogContext.Provider value={blogContext}>
        {props.children}
    </BlogContext.Provider>;
};

export default BlogProvider;