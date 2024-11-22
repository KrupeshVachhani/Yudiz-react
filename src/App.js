import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClassFnComponent from './class-fn-component/index.js';
import TimeClock from './time-changing/TimeClock.js';
import Game from './Card-Memory-Game/Game.js';
import Sidebar from './SideBar/Sidebar.js';
import Home from './Home/Home.js';
import EventHandling from './EventHandling-Task/index.js';
import Lifecycle from './ReactLifecyle/Lifecycle.jsx'
import UserDashboard from './FetchAPI/FetchAPI.js';

export default function App() {
  const cardData = [
    {
      id: 1,
      name: 'Card 1',
      description: 'This is the first card.',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Card 2',
      description: 'This is the second card.',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      name: 'Card 3',
      description: 'This is the third card.',
      imageUrl: 'https://via.placeholder.com/150'
    }
  ];

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div
          style={{
            width: '100%',
            marginLeft: '30px',
            margin: 'auto',
            background: 'inherit'
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
          </Routes>
        </div>
      </div>
    </Router>
  );
}

