import React from "react";

function Polyclinic(props) {
  const {name, location} = props;
  return (<div>
    <p> Name : {name}</p>
    <p> Location : {location} </p>
  </div>);
}

export default Polyclinic;
