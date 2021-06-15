import React from "react";
import { useParams } from "react-router-dom";

export const Home = (props) => {
  const { data } = useParams();
  return (
    <div>
      {/* <h1> This is Home Page {props.match.params.data}</h1> */}
      <h1> This is Home Page {data}</h1>
    </div>
  );
};
