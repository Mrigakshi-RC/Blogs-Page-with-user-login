import React from "react";
import { useContext } from "react";
import BlogContext from "../store/blog-context";
// import classes from "./soloCat.module.css";

function SoloCat(props) {
    const blogCtx=useContext(BlogContext)
    console.log(blogCtx)
  return (
    <React.Fragment>
      <img alt="individual category" src={props.imageUrl}/>
      <p>{props.name}</p>
    </React.Fragment>
  );
}

export default SoloCat;