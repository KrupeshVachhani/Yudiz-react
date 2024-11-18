/* eslint-disable react/prop-types */
// FunctionalComponent.js

import React, { useState } from "react";
import "./style.css";

const FunctionalComponent = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");
  const [isVisible, setIsVisible] = useState(true);

  const increment = () => setCount(count + 1);
  const changeColor = () => setColor(color === "red" ? "blue" : "red");
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="functional-component">
      <h2 className="functional-title">Functional Component</h2>
      <p className="count-text">Count: {count}</p>
      <button onClick={increment} className="increment-button">
        Increment
      </button>

      <p className="color-text" style={{ color: color }}>
        Color
      </p>
      <button onClick={changeColor} className="color-button">
        Change Color
      </button>

      <button onClick={toggleVisibility} className="visibility-button">
        Toggle Visibility
      </button>
      {isVisible && <p className="visible-content">Visible Content</p>}
    </div>
  );
};

export const FunctionComponentP = ({
  name,
  description,
  imageUrl,
  onClickHandler,
}) => {
  return (
    <div className="function-component-p">
      <div className="card" onClick={onClickHandler}>
        <img src={imageUrl} alt={name} className="card-image" />
        <h3 className="card-title">{name}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default FunctionalComponent;
