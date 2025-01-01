import React, { useState } from "react";

const FunctionalComponent = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");
  const [isVisible, setIsVisible] = useState(true);

  const increment = () => setCount(count + 1);
  const changeColor = () => setColor(color === "red" ? "blue" : "red");
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-lg font-semibold text-gray-700">Count: {count}</p>
      
      <button 
        onClick={increment}
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md shadow-md transition duration-300"
      >
        Increment
      </button>

      <p className="text-lg font-semibold" style={{ color: color }}>
        Color
      </p>
      
      <button 
        onClick={changeColor}
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md shadow-md transition duration-300"
      >
        Change Color
      </button>

      <button 
        onClick={toggleVisibility}
        className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-md shadow-md transition duration-300"
      >
        Toggle Visibility
      </button>

      {isVisible && (
        <p className="text-gray-700 text-lg mt-2">Visible Content</p>
      )}
    </div>
  );
};

export const FunctionComponentP = ({ name, description, imageUrl, onClickHandler }) => {
  return (
    <div 
      onClick={onClickHandler}
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden cursor-pointer"
    >
      <img 
        src={imageUrl} 
        alt={name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default FunctionalComponent;