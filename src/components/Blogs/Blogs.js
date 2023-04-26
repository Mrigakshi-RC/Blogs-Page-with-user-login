import React, {useEffect,useContext} from "react";
import classes from "./Blogs.module.css";
import CategoryHeader from "./CategoryHeader";
import BlogContext from "../../store/blog-context";

function Blogs(props) {
  const blogCtx=useContext(BlogContext)

  useEffect(()=>{
    fetch(
        "https://api-staging-v2.sploot.space/api/v2/cms/post-categories",
        {
          method: "GET",
          headers: { Authorization: `Bearer ${props.token}` },
        }
      )
    .then((response) => {
      return response.json();
    })
    .then((data)=>{
      blogCtx.categories=data.data.data;
      console.log(blogCtx)
    });
  },[])
  

  return (
    <React.Fragment>
      <CategoryHeader />
      <div className={classes.gridContainer}></div>
    </React.Fragment>
  );
}

export default Blogs;
