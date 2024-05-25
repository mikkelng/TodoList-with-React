
import logo from '../assets/tm-logo.png'; 
import '../components/Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
        <img src={logo} alt="Logo" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;