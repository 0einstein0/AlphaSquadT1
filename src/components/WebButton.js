import React from "react";

function WebButton({ children, ...otherProps}) {
  return<button style={{width:'10rem', height:'3rem'}} {...otherProps}>
  {children}
</button> ;
}

export default WebButton;
