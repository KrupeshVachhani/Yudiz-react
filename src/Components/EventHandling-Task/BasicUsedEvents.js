import React, { useState } from "react";

const EventsDemo = () => {
  const [keyPressed, setKeyPressed] = useState("");
  const [wheelCount, setWheelCount] = useState(0);
  const [dragStatus, setDragStatus] = useState("Draggable");
  const [copyText, setCopyText] = useState("Copy this text!");
  const [focusStatus, setFocusStatus] = useState("Not Focused");
  const [doubleClickText, setDoubleClickText] = useState("Double Click Me!");

  const handleKeyDown = (e) => {
    setKeyPressed(`Key Pressed: ${e.key}`);
  };

  const handleWheel = () => {
    setWheelCount((prev) => prev + 1);
  };

  const handleDragStart = () => {
    setDragStatus("Dragging...");
  };

  const handleDragEnd = () => {
    setDragStatus("Draggable");
  };

  const handleCopy = (textToCopy) => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopyText("Text Copied!");
      setTimeout(() => setCopyText("Copy this text!"), 2000);
    });
  };

  const handleFocus = () => {
    setFocusStatus("Focused!");
  };

  const handleBlur = () => {
    setFocusStatus("Not Focused");
  };

  const handleDoubleClick = () => {
    setDoubleClickText("Double Clicked! 🎉");
    setTimeout(() => setDoubleClickText("Double Click Me!"), 1000);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-300 via-purple-300 to-indigo-400 p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          React Events Demo
        </h1>

        {/* Keyboard Event */}
        <div className="space-y-2">
          <input
            type="text"
            onKeyDown={handleKeyDown}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
            placeholder="Type something..."
          />
          <div className="text-blue-600 h-6">{keyPressed}</div>
        </div>

        {/* Wheel Event */}
        <div
          onWheel={handleWheel}
          className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-200"
        >
          <span className="text-lg font-semibold text-gray-700">
            Wheel Count: {wheelCount}
          </span>
        </div>

        {/* Drag Event */}
        <div
          draggable
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          className="bg-white rounded-lg border-2 border-dashed border-gray-300 p-6 text-center cursor-move hover:border-blue-400 transition-colors duration-200"
        >
          <span className="text-lg text-gray-700">{dragStatus}</span>
        </div>

        {/* Copy Event */}
        <div
          onClick={() => handleCopy("Hello Krupesh")}
          className="bg-white rounded-lg shadow-md p-6 text-center cursor-pointer hover:bg-gray-50 transition-colors duration-200"
        >
          <span className="text-lg text-green-600">{copyText}</span>
        </div>

        {/* Focus Events */}
        <div className="space-y-2">
          <input
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
            placeholder="Click here to focus"
          />
          <div className="text-center text-red-600">{focusStatus}</div>
        </div>

        {/* Double Click Event */}
        <div
          onDoubleClick={handleDoubleClick}
          className="bg-yellow-300 rounded-lg shadow-md p-6 text-center cursor-pointer hover:bg-yellow-400 transition-colors duration-200"
        >
          <span className="text-lg font-semibold text-gray-800">
            {doubleClickText}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EventsDemo;
