
import { Route, Routes } from 'react-router-dom'; 

const Sidebar = () => {
  return (
    <aside className="sidebar">
    <Routes/>
      <ul>
        <li><Route to="/">Home</Route></li>
        <li><Route to="/about">About</Route></li>
      </ul>`
     <Routes/> 
    </aside>
  );
};

export default Sidebar;