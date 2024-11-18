
import React, { useState } from "react";
import "./EventHandling.css";

const EventHandling = () => {
  const images = [
    { id: 1, img: "./assets/penguin.png" },
    { id: 2, img: "./assets/ice-cream.png" },
    { id: 3, img: "./assets/musical-notes.png" },
    { id: 4, img: "./assets/crown.png" },
    { id: 5, img: "./assets/laptop.png" },
    { id: 6, img: "./assets/baby-boy.png" },
  ];

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorVisibility, setCursorVisibility] = useState(false);
  const [Cimg, setImg] = useState("./assets/penguin.png");

  const handleCursorMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleCursorVisibility = (img, visible) => {
    setCursorVisibility(visible);
    if (visible) {
      setImg(img);
    }
  };

  const handleScroll = (e) => {
    console.log("Scroll event detected:", e);
  };
  
  return (
    <div
      className="EventHandling_main"
      onScroll={handleScroll}
      style={{
        height: "",
        overflowY: "auto", 
        border: "1px solid black",
      }}
    >
      {cursorVisibility && (
        <img
          src={Cimg}
          alt="Cursor"
          style={{
            width: "50px",
            height: "50px",
            position: "fixed",
            top: cursorPosition.y + "px",
            left: cursorPosition.x + "px",
            pointerEvents: "none",
            transform: "translate(-50%, -50%)",
            scale: cursorVisibility ? "100%" : "0%",
            transition: "top 0.1s, left 0.1s, scale 0.2s",
            zIndex: 1000,
          }}
        />
      )}

      <div
        className="EventHandling_mini"
        style={{
          background: "pink",
          margin: "10px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
          position: "relative",
          minHeight: "100vh",
        }}
      >
        {images.map((e) => (
          <div
            onMouseMove={handleCursorMove}
            onMouseEnter={() => handleCursorVisibility(e.img, true)}
            onMouseLeave={() => handleCursorVisibility(e.img, false)}
            key={e.id}
            style={{
              border: "1px solid black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
            }}
          >
            <img
              src={e.img}
              alt={`Item ${e.id}`}
              style={{
                width: "200px",
                height: "200px",
                pointerEvents: "none",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventHandling;
