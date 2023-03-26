import React from "react";
import classes from "./CategoryHeader.module.css";
import { useContext, useEffect } from "react";
import BlogContext from "../store/blog-context";
import SoloCat from "./SoloCat";

function CategoryHeader() {
  const blogCtx = useContext(BlogContext);

  const {items}=blogCtx;
  useEffect(() => {},[items])

  return (
    <React.Fragment>
      <div className={classes.headerContainer}>
        {blogCtx.categories.map((category) => (
          <SoloCat
            name={category.name}
            imageUrl={category.imageUrl}
          />
        ))}
      </div>
    </React.Fragment>
  );
}

export default CategoryHeader;
