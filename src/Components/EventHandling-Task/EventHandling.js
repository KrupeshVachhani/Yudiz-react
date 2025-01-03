import React, { useState, useEffect, useCallback } from "react";

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

  // Smooth cursor movement using RAF
  const smoothCursorUpdate = useCallback((targetX, targetY) => {
    setCursorPosition((prev) => {
      const dx = (targetX - prev.x) * 0.3; // Adjust speed factor (0.3 for smooth follow)
      const dy = (targetY - prev.y) * 0.3;

      return {
        x: prev.x + dx,
        y: prev.y + dy,
      };
    });
  }, []);

  useEffect(() => {
    let animationFrameId;
    let targetX = cursorPosition.x;
    let targetY = cursorPosition.y;

    const animate = () => {
      smoothCursorUpdate(targetX, targetY);
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    if (cursorVisibility) {
      window.addEventListener("mousemove", handleMouseMove);
      animationFrameId = requestAnimationFrame(animate);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [
    cursorVisibility,
    smoothCursorUpdate,
    cursorPosition.x,
    cursorPosition.y,
  ]);

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
      className="min-h-screen md:pl-42   from-pink-300 via-purple-300 to-indigo-400 p-6"
      onScroll={handleScroll}
    >
      {/* Custom Cursor */}
      {cursorVisibility && (
        <img
          src={Cimg}
          alt="Cursor"
          className="fixed pointer-events-none z-50 w-[50px] h-[50px] transform -translate-x-1/2 -translate-y-1/2 will-change-transform"
          style={{
            top: `${cursorPosition.y}px`,
            left: `${cursorPosition.x}px`,
            scale: cursorVisibility ? "100%" : "0%",
            transition: "scale 0.2s ease-out",
          }}
        />
      )}

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-screen">
        {images.map((e) => (
          <div
            key={e.id}
            onMouseEnter={() => handleCursorVisibility(e.img, true)}
            onMouseLeave={() => handleCursorVisibility(e.img, false)}
            className="bg-white rounded-xl shadow-lg p-8 flex justify-center items-center transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={e.img}
              alt={`Item ${e.id}`}
              className="w-48 h-48 object-contain pointer-events-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventHandling;
