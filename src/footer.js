import lemon from "./lemon.svg";

function Footer() {
  return (
    <footer className="footerHead">
      <nav className="footerWrap">
        <img className="logobottomn" src={lemon} alt="gfde"></img>
        <div className="navfooter">
          <ul>
            <li>
              <a href="https://github.com">
                <p className="navList">
                  Doormat <br /> Navigation
                </p>
              </a>
            </li>
            <li>
              <a href="https://github.com">Home</a>
            </li>
            <li>
              <a href="https://github.com">About</a>
            </li>
            <li>
              <a href="https://github.com">Menu</a>
            </li>
            <li>
              <a href="https://github.com">Reservation</a>
            </li>

            <li>
              <a href="https://github.com">Login</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="https://github.com">
                <p className="navList">Contact</p>
              </a>
            </li>

            <li>
              <a href="https://github.com">Adress</a>
            </li>
            <li>
              <a href="https://github.com">Phone number</a>
            </li>
            <li>
              <a href="https://github.com">email</a>
            </li>
          </ul>
          <ul className="cool">
            <li>
              <a href="https://github.com">
                <p className="navList"> Social Media Links</p>
              </a>
            </li>

            <li>
              <a href="https://github.com">X</a>
            </li>
            <li>
              <a href="https://github.com">Facebook</a>
            </li>
            <li>
              <a href="https://github.com">Instagram</a>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
