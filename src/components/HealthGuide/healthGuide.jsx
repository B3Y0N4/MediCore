import React from "react";
import Content from './Content';

function healthGuide(props) {
  return <div className={props}>
    <Content contentHeader="This is header of content" contentBody="This is body of content" styles={props}/>
  </div>;
}

export default healthGuide;
