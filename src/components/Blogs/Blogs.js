import React, {useEffect,useContext,useState} from "react";
import classes from "./Blogs.module.css";
import CategoryHeader from "./CategoryHeader";
import BlogContext from "../../store/blog-context";

function Blogs(props) {
  const blogCtx=useContext(BlogContext)
  const [show, setShow]=useState();

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
      blogCtx.updateCategory(data.data.data);
      setShow(data.data.data[0].name)
    });
  },[])
  

  return (
    <React.Fragment>
      <CategoryHeader />
      <p>{show}</p>
      <div className={classes.gridContainer}></div>
    </React.Fragment>
  );
}

export default Blogs;
