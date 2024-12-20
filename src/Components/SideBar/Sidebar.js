
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
          <Link to="/event-handling">Event Handling</Link>
        </li>
        <li>
          <Link to="/game">Cards Memory Game</Link>
        </li>
        <li>
          <Link to="/api-fetch">API Fetch</Link>
        </li>
        <li>
          <Link to="/api-fetch-crud">API Fetch Post CRUD</Link>
        </li>
        <li>
          <Link to="/props-drilling">Props Drilling</Link>
        </li>
        <li>
          <Link to="/redux">Redux </Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
