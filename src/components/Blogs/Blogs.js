import React from "react";
import classes from "./Blogs.module.css";
import { useContext } from "react";
import UserContext from "../store/user-context";

function Blogs() {
  const userCtx= useContext(UserContext);
  return (
    <React.Fragment>
      <div className={classes.gridContainer}></div>
    </React.Fragment>
  );
}

export default Blogs;
