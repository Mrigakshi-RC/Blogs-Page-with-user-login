import React from "react";
import classes from "./CategoryHeader.module.css";
import SoloCat from "./SoloCat";

function CategoryHeader() {
  const categories=[];

  return (
    <React.Fragment>
      <div className={classes.headerContainer}>
        {categories.map((category) => (
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
