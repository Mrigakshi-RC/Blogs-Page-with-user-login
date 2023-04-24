import React from "react";

function SoloCat(props) {
  return (
    <React.Fragment>
      <div>
        <img alt="individual category" src={props.imageUrl} />
        <p>{props.name}</p>
      </div>
    </React.Fragment>
  );
}

export default SoloCat;
