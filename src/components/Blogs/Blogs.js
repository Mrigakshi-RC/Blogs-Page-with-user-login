import React, {useEffect,useContext,useState} from "react";
import classes from "./Blogs.module.css";
import CategoryHeader from "./CategoryHeader";
import BlogContext from "../../store/blog-context";
import Blog from "./Blog";

function Blogs(props) {
  const blogCtx=useContext(BlogContext);
  const slug=blogCtx.slug;
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
      blogCtx.updateSlug(data.data.data[0].slug);
    });
  },[])
  

  return (
    <React.Fragment>
      <CategoryHeader />
      <div className={classes.gridContainer}>
      {slug && slug.map((item) => (
          <Blog
            description={item.description}
            imageUrl={item.imageUrl}
            redirectUrl={item.redirectUrl}
            title={item.title}
            key={item.id}
          />
        ))}
      </div>
    </React.Fragment>
  );
}

export default Blogs;
