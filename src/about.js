import Mario from "./Mario.jpg";
import Adrian from "./Adrian.jpg";

function About() {
  return (
    <div className="aboutChef">
      <div className="daml">
        <div className="aboutOut">
          <div className="aboutText">
            <p className="aboutText1">Little lemon</p>
            <p className="aboutText2">Chikago</p>
            <p className="aboutText3">
              SERVED EVERY DAY SINCE 1990 Littel lemon opened on Thanksgiving
              Day 1990. Chef / Owner Ron Silver began baking pies and selling
              them to restaurants and his neighbors out of a small kitchen at
              the corner of Hudson and North Moore St. in Tribeca. Today, NYC’s
              beloved restaurant and pie shop celebrates 27 years of classic,
              made from scratch American cooking.
            </p>
          </div>
          <div className="aboutImage">
            <img src={Mario} alt="opps!!!" className="Chef1"></img>
            <img src={Adrian} alt="opps!!!" className="Chef2"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
