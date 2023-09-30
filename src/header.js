import lemon from "./lemon.svg";

function Header() {
  return (
    <>
      <header className="topheader">
        <img className="logotop" src={lemon} alt="gfde"></img>
        <nav aria-label="primary-navigatiom" className="navimenu">
          <ul>
            <li>
              <a href="">HOME</a>
            </li>
            <li>
              <a href="">ABOUT</a>
            </li>
            <li>
              <a href="">MENU</a>
            </li>
            <li>
              <a href="">RESERVATION</a>
            </li>
            <li>
              <a href="">ORDER ONLINE</a>
            </li>
            <li>
              <a href="">LOGIN</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default Header;
