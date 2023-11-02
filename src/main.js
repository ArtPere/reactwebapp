import sushi from "./sushi.jpg";
import dessert from "./dessert.jpg";
import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      <main>
        <section className="Lemon">
          <article>
            <h2>Little lemon</h2>
            <br></br>

            <p className="chik">
              <b>Chikago</b>
            </p>

            <p className="pesh">
              The union offers great healthy snack and meal options, including
              fruit smoothies from Jamba.
            </p>
            <Link to="/booking">
              {" "}
              <button className="c-button">
                <b>Reserve a Table</b>
              </button>
            </Link>
          </article>
          <img className="sushi" src={sushi} alt="sushi"></img>
        </section>
      </main>
    </>
  );
}

export default Main;
