import lemon from "./lemon.svg";

function Footer() {
  return (
    <>
      <footer>
        <img className="logotop" src={lemon} alt="gfde"></img>
        <nav className="navfooter">
          <ul>
            <li>
              <a href="">
                Doormat <br /> Navigatin
              </a>
              <br />
              <br />
            </li>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Menu</a>
            </li>
            <li>
              <a href="">Reservation</a>
            </li>
            <li>
              <a href="">Online order</a>
            </li>
            <li>
              <a href="">Login</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Contact</a>
            </li>
            <br />
            <br />
            <li>
              <a href="">Adress</a>
            </li>
            <li>
              <a href="">Phone number</a>
            </li>
            <li>
              <a href="">email</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Social Media Links</a>
            </li>
            <br />
            <br />
            <li>
              <a href="">X</a>
            </li>
            <li>
              <a href="">Facebook</a>
            </li>
            <li>
              <a href="">Instagram</a>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
