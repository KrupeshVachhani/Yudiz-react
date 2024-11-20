
// Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <h3 className="Home">Navigation</h3>
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/react-lifecycle">React lifecycle</Link>
        </li>
        <li>
          <Link to="/class-component">Class Component</Link>
        </li>
        <li>
          <Link to="/time-clock">Time Clock</Link>
        </li>
        <li>
          <Link to="/game">Cards Memory Game</Link>
        </li>
        <li>
          <Link to="/event-handling">Event Handling</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
