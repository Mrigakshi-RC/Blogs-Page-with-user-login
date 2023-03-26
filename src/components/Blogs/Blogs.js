import React from "react";
import classes from "./Blogs.module.css";
import CategoryHeader from "./CategoryHeader";

function Blogs() {

  return (
    <React.Fragment>
      <CategoryHeader />
      <div className={classes.gridContainer}></div>
    </React.Fragment>
  );
}

export default Blogs;
