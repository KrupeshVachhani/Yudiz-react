// import React from "react";

// const Home = () => {
//   return (
//     <div style={{width:'100%',height:'100vh',background:'pink',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
//       <h1>Welcome To Krupesh's React Training Tasks</h1>
//     </div>
//   );
// };

// export default Home;

import React, { useState } from "react";

const EventsDemo = () => {
  const [keyPressed, setKeyPressed] = useState("");
  const [wheelCount, setWheelCount] = useState(0);
  const [dragStatus, setDragStatus] = useState("Draggable");
  const [copyText, setCopyText] = useState("");
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

  const handleCopy = () => {
    setCopyText("Text Copied!");
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
    <div
      style={{
        maxWidth: "100%",
        margin: "20px auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        background: "white",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#333",
          marginBottom: "20px",
        }}
      >
        React Events Demo
      </h1>

      {/* Keyboard Event */}
      <input
        type="text"
        onKeyDown={handleKeyDown}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          borderRadius: "4px",
          border: "1px solid #ddd",
        }}
        placeholder="Type something..."
      />
      <div style={{ height: "20px", color: "#007bff" }}>{keyPressed}</div>

      {/* Wheel Event */}
      <div
        onWheel={handleWheel}
        style={{
          padding: "20px",
          backgroundColor: "#e9ecef",
          borderRadius: "8px",
          marginBottom: "10px",
          textAlign: "center",
        }}
      >
        Wheel Count: {wheelCount}
      </div>

      {/* Drag Event */}
      <div
        draggable
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        style={{
          padding: "20px",
          backgroundColor: "#f8f9fa",
          border: "2px dashed #dee2e6",
          borderRadius: "8px",
          marginBottom: "10px",
          cursor: "move",
          textAlign: "center",
        }}
      >
        {dragStatus}
      </div>

      {/* Copy Event */}
      <div
        onCopy={handleCopy}
        style={{
          padding: "20px",
          backgroundColor: "#f5f5f5",
          borderRadius: "8px",
          marginBottom: "10px",
          cursor: "pointer",
          userSelect: "all",
          textAlign: "center",
        }}
      >
        Copy this text!
        <div style={{ color: "#28a745" }}>{copyText}</div>
      </div>

      {/* Focus Events */}
      <input
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          borderRadius: "4px",
          border: "1px solid #ddd",
        }}
        placeholder="Click here to focus"
      />
      <div style={{ textAlign: "center", color: "#dc3545" }}>{focusStatus}</div>

      {/* Double Click Event */}
      <div
        onDoubleClick={handleDoubleClick}
        style={{
          padding: "20px",
          backgroundColor: "#ffd700",
          borderRadius: "8px",
          marginBottom: "10px",
          cursor: "pointer",
          textAlign: "center",
        }}
      >
        {doubleClickText}
      </div>
    </div>
  );
};

export default EventsDemo;
