import React, { useEffect, useState } from "react";
import { Data } from "./Data";
// npm i isomorphic-fetch    <--run this in terminal first
export const UseIsomorphicFetch = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() =>
    fetch("https://restcountries.eu/rest/v2/all") // request
      .then((response) => response.json()) // wait for promise to fulfill, if ok then rcv response, call json()
      .then((json) => setCountries(json))
  ); // json data... store it in your state .. setState({countries :json })

  return (
    <div>
      <h1>Countries Names</h1>
      <Data data={countries} />
    </div>
  );
};
