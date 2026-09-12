import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h1> </h1>
      <ul className="nav">
        <li>
          <NavLink to="/todo">Todo list</NavLink>
        </li>

        <li>
          <NavLink to="/swapi">SWAPI</NavLink>
        </li>
        <li>
          <NavLink to="/about">Hobby</NavLink>
        </li>
        <li>
          <NavLink to="/cv">CV</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
