import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Sidebar from "./Components/SideBar/Sidebar.js";
import Home from "./Components/Home/Home.js";
import ClassFnComponent from "./Components/class-fn-component/index.js";
import TimeClock from "./Components/time-changing/TimeClock.js";
import Game from "./Components/Card-Memory-Game/Game.js";
import EventHandling from "./Components/EventHandling-Task/index.js";
import Lifecycle from "./Components/ReactLifecyle/Lifecycle.jsx";
import UserDashboard from "./Components/FetchAPI/FetchAPI.js";
import FetchApiPostCRUD from "./Components/FetchAPI/FetchApiPostCRUD.js";
import PostDetail from "./Components/FetchAPI/PostDetails.js";
import PropsDrilling from "./Components/PropsDrilling/PropsDrilling.js";
import CounterRedux from "./Components/CounterRedux/CounterRedux.js";

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

  // Layout component that includes Sidebar and Outlet
  const Layout = () => {
    return (
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
          <Outlet /> 
        </div>
      </div>
    );
  };

  const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, 
      children: [
        {
          // index: true,
          path:'/',
          element: <Home />,
        },
        {
          path: "react-lifecycle",
          element: <Lifecycle />,
        },
        {
          path: "class-component",
          element: <ClassFnComponent Data={cardData} />,
        },
        {
          path: "time-clock",
          element: <TimeClock />,
        },
        {
          path: "game",
          element: <Game />,
        },
        {
          path: "event-handling",
          element: <EventHandling />,
        },
        {
          path: "api-fetch",
          element: <UserDashboard />,
        },
        {
          path: "api-fetch-crud",
          element: <FetchApiPostCRUD />,
        },
        {
          path: "api-fetch-crud/:id",
          element: <PostDetail />,
        },
        {
          path: "props-drilling",
          element: <PropsDrilling />,
        },
        {
          path: "redux",
          element: <CounterRedux />,
        }
      ],
    },
  ]);

  return <RouterProvider router={appRoutes} />;
}
