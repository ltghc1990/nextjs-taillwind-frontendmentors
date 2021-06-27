import React from "react";

// being apllied to everthing for some reason
const Background = (props) => {
  return (
    <div className="h-full" style={props.style}>
      {props.children}
    </div>
  );
};

export default Background;
