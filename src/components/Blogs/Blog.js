import React from 'react';
import classes from "./Blog.module.css"

function Blog(props) {
  return (
    <div className={classes.blogContainer}>
        <img src={props.imageUrl}></img>
        <p className="title">{props.title}</p>
        <p className="description">{props.description}</p>
    </div>
  )
}

export default Blog
