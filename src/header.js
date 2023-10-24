import lemon from "./lemon.svg";

function Header() {
  return (
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
            <a href="https://github.com">HOME</a>
          </li>
          <li>
            <a href="https://github.com">ABOUT</a>
          </li>
          <li>
            <a href="https://github.com">MENU</a>
          </li>
          <li>
            <a href="https://github.com">BOOKING</a>
          </li>
          <li>
            <a href="https://github.com">LOGIN</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
