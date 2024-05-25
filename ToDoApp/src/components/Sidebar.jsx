// import { Route, Routes } from 'react-router-dom';
import "../components/Sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => (
  <sidebar className="sidebar">
    <ul>
      <li>
      <button className="sidebar-btn">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          HOME
        </NavLink>
        </button>
      </li>

      <li>
         <button className="sidebar-btn">
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          ABOUT
        </NavLink>
        </button>
      </li>
    </ul>
  </sidebar>
);

export default Sidebar;
