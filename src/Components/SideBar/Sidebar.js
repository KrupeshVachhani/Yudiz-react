import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/auth"; // Import the logout action

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLogout() {
    // Clear Redux state and local storage
    dispatch(logout()); // Dispatch the logout action to clear auth state
    localStorage.clear();

    // Redirect to login page
    navigate("/login", { replace: true });
  }

  return (
    <div className="w-64 bg-gray-100 min-h-screen p-4 border-r">
      <NavLink to="/" className="block mb-6 text-xl font-bold text-gray-800">
        Navigation
      </NavLink>
      <ul className="space-y-3">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md transition duration-300 ${
                isActive
                  ? "bg-blue-500 text-white font-semibold"
                  : "text-gray-700 hover:bg-gray-200"
              }`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/react-lifecycle"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md transition duration-300 ${
                isActive
                  ? "bg-blue-500 text-white font-semibold"
                  : "text-gray-700 hover:bg-gray-200"
              }`
            }
          >
            React lifecycle
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/class-component"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md transition duration-300 ${
                isActive
                  ? "bg-blue-500 text-white font-semibold"
                  : "text-gray-700 hover:bg-gray-200"
              }`
            }
          >
            Class Component
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/time-clock"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md transition duration-300 ${
                isActive
                  ? "bg-blue-500 text-white font-semibold"
                  : "text-gray-700 hover:bg-gray-200"
              }`
            }
          >
            Time Clock
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/event-handling"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md transition duration-300 ${
                isActive
                  ? "bg-blue-500 text-white font-semibold"
                  : "text-gray-700 hover:bg-gray-200"
              }`
            }
          >
            Event Handling
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/game"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md transition duration-300 ${
                isActive
                  ? "bg-blue-500 text-white font-semibold"
                  : "text-gray-700 hover:bg-gray-200"
              }`
            }
          >
            Cards Memory Game
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/api-fetch"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md transition duration-300 ${
                isActive
                  ? "bg-blue-500 text-white font-semibold"
                  : "text-gray-700 hover:bg-gray-200"
              }`
            }
          >
            API Fetch
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/api-fetch-crud"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md transition duration-300 ${
                isActive
                  ? "bg-blue-500 text-white font-semibold"
                  : "text-gray-700 hover:bg-gray-200"
              }`
            }
          >
            API Fetch Post CRUD
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/props-drilling"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md transition duration-300 ${
                isActive
                  ? "bg-blue-500 text-white font-semibold"
                  : "text-gray-700 hover:bg-gray-200"
              }`
            }
          >
            Props Drilling
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/redux"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md transition duration-300 ${
                isActive
                  ? "bg-blue-500 text-white font-semibold"
                  : "text-gray-700 hover:bg-gray-200"
              }`
            }
          >
            Redux
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md transition duration-300 text-center ${
                isActive
                  ? "bg-blue-500 text-white font-semibold"
                  : "text-gray-700 hover:bg-gray-200"
              }`
            }
          >
            Login
          </NavLink>
        </li>
        <li>
          <button
            onClick={handleLogout}
            className="block w-full px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 transition duration-300"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
