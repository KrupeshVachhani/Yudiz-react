import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/auth";
import { FaBars, FaTimes } from "react-icons/fa";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import "./style.css";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle logout functionality
  const handleLogout = () => {
    dispatch(logout());
    localStorage.clear();
    navigate("/login", { replace: true });
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Hamburger menu for mobile */}
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? null : <FaBars />}
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isMobileMenuOpen ? "open" : ""} min-h-screen overflow-y-hidden`}>
        {/* Close menu icon for mobile */}
        {isMobileMenuOpen && (
          <div className="close-menu-icon" onClick={toggleMobileMenu}>
            <FaTimes />
          </div>
        )}

        <NavLink to="/" className="sidebar-header">
          Navigation
        </NavLink>

        {/* Wrap the sidebar menu with SimpleBar */}
        <SimpleBar style={{ maxHeight: "calc(100vh - 60px)" }}>
          <ul className="sidebar-menu">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? "active" : ""}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/react-lifecycle"
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? "active" : ""}`
                }
              >
                React Lifecycle
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/class-component"
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? "active" : ""}`
                }
              >
                Class Component
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/time-clock"
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? "active" : ""}`
                }
              >
                Time Clock
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/event-handling"
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? "active" : ""}`
                }
              >
                Event Handling
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/game"
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? "active" : ""}`
                }
              >
                Cards Memory Game
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/api-fetch"
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? "active" : ""}`
                }
              >
                API Fetch
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/api-fetch-crud"
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? "active" : ""}`
                }
              >
                API Fetch Post CRUD
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/props-drilling"
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? "active" : ""}`
                }
              >
                Props Drilling
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/redux"
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? "active" : ""}`
                }
              >
                Redux
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sass"
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? "active" : ""}`
                }
              >
                Sass
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/internalization"
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? "active" : ""}`
                }
              >
                Internalization
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? "active" : ""}`
                }
              >
                Login
              </NavLink>
            </li>
            <li>
              <button onClick={handleLogout} className="sidebar-logout">
                Logout
              </button>
            </li>
          </ul>
        </SimpleBar>
      </div>
    </>
  );
};

export default Sidebar;