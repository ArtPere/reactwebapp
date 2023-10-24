import testi from "./testi.jpg";
import testi1 from "./testi1.jpg";
import testi2 from "./testi2.jpg";
import { useState, useEffect } from "react";
function Section() {
  const [index, setIndex] = useState(0);
  const card3 = [
    { id: "1", image: testi },
    { id: "2", image: testi1 },
    { id: "3", image: testi2 },
  ];
  const mod = (n, m) => {
    let result = n % m;
    return result >= 0 ? result : result + m;
  };

  useEffect(() => {
    setTimeout(() => {
      setIndex((index + 1) % card3.length);
    }, 3000);
  }, [index]);

  return (
    <div className="testimon">
      <div className="carousel">
        {card3.map((item, i) => {
          const indexLeft = mod(index - 1, card3.length);
          const indexRight = mod(index + 1, card3.length);

          let className = "";
          if (i === index) {
            className = "card card--active";
          } else if (i === indexRight) {
            className = "card card--right";
          } else if (i === indexLeft) {
            className = "card card--left";
          } else {
            className = "card";
          }
          return (
            <img
              src={item.image}
              key={item.id}
              alt="Comics"
              className={className}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Section;
