import { NavLink } from "react-router-dom";
import ChangeButtonColor from "./ChangeButtonColor.jsx";

const Header = () => {
  return (
    <header className="header">
      <h1> </h1>
      <ul className="nav">
        <li>
          <NavLink to="/">Todo list</NavLink>
        </li>

        <li>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
      <ChangeButtonColor />
    </header>
  );
};

export default Header;
