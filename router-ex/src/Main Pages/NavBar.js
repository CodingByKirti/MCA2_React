import React from "react";
import { Link, NavLink } from "react-router-dom";
export const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          {/* <a href="/home">Home </a> */}
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/home/fridge">Fridge</NavLink>
        </li>
        <li>
          <NavLink to="/home/ac">AC</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li>
          <NavLink exact to="/settings" activeStyle={{ color: "red" }}>
            Setiings PAge
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
