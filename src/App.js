import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClassFnComponent from "./Components/class-fn-component/index.js";
import TimeClock from "./Components/time-changing/TimeClock.js";
import Game from "./Components/Card-Memory-Game/Game.js";
import Sidebar from "./Components/SideBar/Sidebar.js";
import Home from "./Components/Home/Home.js";
import EventHandling from "./Components/EventHandling-Task/index.js";
import Lifecycle from "./Components/ReactLifecyle/Lifecycle.jsx";
import UserDashboard from "./Components/FetchAPI/FetchAPI.js";
import FetchApiPostCRUD from "./Components/FetchAPI/FetchApiPostCRUD.js";
import PostDetail from "./Components/FetchAPI/PostDetails.js";
import PropsDrilling from "./Components/PropsDrilling/PropsDrilling.js";

export default function App() {
  const cardData = [
    {
      id: 1,
      name: "Card 1",
      description: "This is the first card.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Card 2",
      description: "This is the second card.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Card 3",
      description: "This is the third card.",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div
          style={{
            width: "100%",
            marginLeft: "30px",
            margin: "auto",
            background: "inherit",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/react-lifecycle" element={<Lifecycle />} />
            <Route
              path="/class-component"
              element={<ClassFnComponent Data={cardData} />}
            />
            <Route path="/time-clock" element={<TimeClock />} />
            <Route path="/game" element={<Game />} />
            <Route path="/event-handling" element={<EventHandling />} />
            <Route path="/api-fetch" element={<UserDashboard />} />
            <Route path="/api-fetch-crud" element={<FetchApiPostCRUD />} />
            <Route path="/api-fetch-crud/:id" element={<PostDetail />} />
            <Route path="/props-drilling" element={<PropsDrilling />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
