import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Login } from "./Components/login-redirect";
import { ProtectedRoute } from "./protectedRoute/ProtectedRoute.js";
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
import { cardData } from "./constants.js";
import SassReact from "./Components/sass-react/SassReact.js";
import Internalization from "./Components/Internilaztion/index.js";
import ReactQuery from "./Components/ReactQuery/index.js";

export default function App() {
  const [marginLeft, setMarginLeft] = useState("0px");

  // Function to update marginLeft based on screen width
  const updateMarginLeft = () => {
    if (window.innerWidth > 768) {
      setMarginLeft("250px"); // Add margin for desktop
    } else {
      setMarginLeft("0px"); // No margin for mobile
    }
  };

  // Add event listener for window resize
  useEffect(() => {
    updateMarginLeft(); // Set initial margin
    window.addEventListener("resize", updateMarginLeft); // Update on resize

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", updateMarginLeft);
    };
  }, []);

  // Layout component that includes Sidebar and Outlet
  const Layout = () => {
    return (
      <div style={{ display: "flex" }}>
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div
          style={{
            flex: 1, 
            marginLeft: marginLeft, 
            padding: "20px", 
            transition: "margin-left 0.3s ease", 
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
          path: "/",
          element: (
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          ),
        },
        { path: "login", element: <Login /> },
        {
          path: "react-lifecycle",
          element: (
            <ProtectedRoute>
              <Lifecycle />
            </ProtectedRoute>
          ),
        },
        {
          path: "class-component",
          element: (
            <ProtectedRoute>
              <ClassFnComponent Data={cardData} />
            </ProtectedRoute>
          ),
        },
        {
          path: "time-clock",
          element: (
            <ProtectedRoute>
              <TimeClock />
            </ProtectedRoute>
          ),
        },
        {
          path: "game",
          element: (
            <ProtectedRoute>
              <Game />
            </ProtectedRoute>
          ),
        },
        {
          path: "event-handling",
          element: (
            <ProtectedRoute>
              <EventHandling />
            </ProtectedRoute>
          ),
        },
        {
          path: "api-fetch",
          element: (
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          ),
        },
        {
          path: "api-fetch-crud",
          element: (
            <ProtectedRoute>
              <FetchApiPostCRUD />
            </ProtectedRoute>
          ),
        },
        {
          path: "api-fetch-crud/:id",
          element: (
            <ProtectedRoute>
              <PostDetail />
            </ProtectedRoute>
          ),
        },
        {
          path: "props-drilling",
          element: (
            <ProtectedRoute>
              <PropsDrilling />
            </ProtectedRoute>
          ),
        },
        {
          path: "redux",
          element: (
            <ProtectedRoute>
              <CounterRedux />
            </ProtectedRoute>
          ),
        },
        {
          path: "sass",
          element: (
            <ProtectedRoute>
              <SassReact />
            </ProtectedRoute>
          ),
        },
        {
          path: "internalization",
          element: (
            <ProtectedRoute>
              <Internalization />
            </ProtectedRoute>
          ),
        },
        {
          path: "reactquery",
          element: (
            <ProtectedRoute>
              <ReactQuery />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={appRoutes} />;
}
