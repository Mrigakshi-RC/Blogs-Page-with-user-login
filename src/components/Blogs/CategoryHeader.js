import React, {useContext} from "react";
import classes from "./CategoryHeader.module.css";
import SoloCat from "./SoloCat";
import BlogContext from "../../store/blog-context";

function CategoryHeader() {
  const blogCtx=useContext(BlogContext)
  const categories=blogCtx.categories;

  return ( //TODO: add onclick to each
    <React.Fragment>
      <div className={classes.headerContainer}>
        {categories && categories.map((category) => (
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
