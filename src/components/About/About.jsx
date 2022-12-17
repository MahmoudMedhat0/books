import React from "react";
import { useLocation } from "react-router-dom";

function About() {
  const location = useLocation();
  return (
    <>
      <div>{location.state.name}</div>
      <div>{location.state.phone}</div>
    </>
  );
}

export default About;
