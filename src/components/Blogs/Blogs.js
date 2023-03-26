import React from "react";
import classes from "./Blogs.module.css";
import { useContext, useEffect } from "react";
import UserContext from "../store/user-context";
import BlogContext from "../store/blog-context";
import CategoryHeader from "./CategoryHeader";

function Blogs() {
  const userCtx = useContext(UserContext);
  const blogCtx = useContext(BlogContext);

  useEffect(() => {
    fetch("https://api-staging-v2.sploot.space/api/v2/cms/post-categories", {
      method: "GET",
      headers: { Authorization: `Bearer ${userCtx.authToken}` },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        blogCtx.categories = data.data.data;
        console.log(blogCtx.categories)
      });
  }, [userCtx.authToken,blogCtx]);

  return (
    <React.Fragment>
      <CategoryHeader />
      <div className={classes.gridContainer}></div>
    </React.Fragment>
  );
}

export default Blogs;
