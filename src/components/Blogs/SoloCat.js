import React from "react";
import classes from "./SoloCat.module.css";

function SoloCat(props) {
  return (
    <React.Fragment>
      <div className={classes.container}>
        <img alt="individual category" src={props.imageUrl} />
        <p>{props.name}</p>
      </div>
    </React.Fragment>
  );
}

export default SoloCat;
