
import logo from '../assets/logo.jpg'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
        <h1>To do list</h1>
      </div>
    </nav>
  );
};

export default Navbar;