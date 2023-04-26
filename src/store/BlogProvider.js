import { useState } from "react";
import BlogContext from "./blog-context";

const defaultBlogState ={
    categories:[]
};

const BlogProvider = (props) => {
    const [categoryState,setCategory]=useState();
    const categoryUpdate=val=>{
        setCategory(val);
    }
    const blogContext = {
        categories: categoryState,
        updateCategory:categoryUpdate
    }
    return <BlogContext.Provider value={blogContext}>
        {props.children}
    </BlogContext.Provider>;
};

export default BlogProvider;