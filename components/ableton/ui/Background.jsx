import React from "react";

// being apllied to everthing for some reason
const Background = (props) => {
  return <div className="h-screen">{props.children}</div>;
};

export default Background;
