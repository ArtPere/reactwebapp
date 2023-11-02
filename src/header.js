import lemon from "./lemon.svg";
import { Route, Routes, Link } from "react-router-dom";
import { Notfound } from "./aboutM";
import { Homes } from "./Homes";
function Header() {
  return (
    <>
      <header className="header">
        <img className="logotop" src={lemon} alt="logolemon"></img>
        <input type="checkbox" id="check" />
        <label for="check" className="icons">
          <i class="bx bx-menu" id="menu-icon"></i>
          <i class="bx bx-x" id="close-icon"></i>
        </label>
        <nav className="navimenu">
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/">MENU</Link>
            </li>
            <li>
              <Link to="/booking">BOOKING</Link>
            </li>
            <li>
              <Link to="/">LOGIN</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default Header;
