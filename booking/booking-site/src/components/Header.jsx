import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          <span className="logo-circle"></span>
          <span>Booking</span>
        </Link>
        <ul className="navigation">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/"
              end
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
