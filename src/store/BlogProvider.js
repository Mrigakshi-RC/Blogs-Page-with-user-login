import { useState } from "react";
import BlogContext from "./blog-context";

const defaultBlogState = {
  categories: [],
};

const BlogProvider = (props) => {
  const [categoryState, setCategory] = useState();
  const [slugState, setSlug] = useState();

  function slugUpdate(val) {
    console.log(val)
    fetch(
      "https://api-staging-v2.sploot.space/api/v2/public/cms/post-categories/"+val
    )
      .then((response) => response.json())
      .then((data) => setSlug(data.data.data));//set slug here
  }

  const blogContext = {
    categories: categoryState,
    updateCategory: setCategory,
    slug: slugState,
    updateSlug: slugUpdate,
  };
  return (
    <BlogContext.Provider value={blogContext}>
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;
