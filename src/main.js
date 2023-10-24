import sushi from "./sushi.jpg";
import dessert from "./dessert.jpg";

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
            <button className="c-button">
              <b>Reserve a Table</b>
            </button>
          </article>
          <img className="sushi" src={sushi} alt="sushi"></img>
        </section>
      </main>
    </>
  );
}

export default Main;
