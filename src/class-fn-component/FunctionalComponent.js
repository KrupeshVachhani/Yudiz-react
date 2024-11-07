// Props and Methods Organization
// Code Reuse and Logic Sharing
// Lifecycle Method Simplification
// State Management Simplification


import React, { useState } from 'react';

const FunctionalComponent = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('pink');
  const [isVisible, setIsVisible] = useState(true)

  const increment = () => setCount(count + 1);

  const changeColor = () => color === 'pink' ? setColor('blue') : setColor('pink');

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div>
      <h2>Functional Component</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>


      <p style={{ color: color }}>Color</p>

      <button onClick={changeColor}>Change Color</button>

      <button onClick={toggleVisibility}>Toggle Visibility</button>
      {isVisible && <p>Visible Content</p>}
    </div >
  );
};

const ABcd = (props) => {
  return (
    <>Hello{props.name}</>
  )
}

export const FunctionComponentP = ({ name, description, imageUrl, onClickHandler }) => {
  return (
    <>
      <ABcd name={name} />
      <div className="card" onClick={onClickHandler}>
        <img src={imageUrl} alt={name} className="card-image" />
        <h3 className="card-title">{name}</h3>
        <p className="card-description">{description}</p>
      </div>
    </>
  );
};

export default FunctionalComponent;
