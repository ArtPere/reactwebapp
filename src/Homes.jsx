import { Route, Routes, Link } from "react-router-dom";
import "./App.scss";
import React, { StrictMode } from "react";
import Header from "./header";
import Main from "./main";
import Footer from "./footer";
import salad from "./salad.jpg";
import lemon from "./lemon.jpg";
import pie from "./pie.svg";
import Section from "./section";
import About from "./about";

const Homes = () => {
  return (
    <>
      <Header />
      <Main />

      <div className="wrapper">
        <Card
          img={salad}
          title="Tie Up Boots"
          description="Fall Favorite Boots"
          price="45.00"
        />
        <Card
          img={lemon}
          title="Tie Up Boots"
          description="Fall Favorite Boots"
          price="45.00"
        />
        <Card
          img={pie}
          title="Tie Up Boots"
          description="Fall Favorite Boots"
          price="45.00"
        />
      </div>
      <Section />
      <About />
      <Footer />
    </>
  );
};

function Card(props) {
  return (
    <div className="cards">
      <img src={props.img} className="cards__img" />
      <div className="cards__body">
        <h2 className="cards__title">{props.title}</h2>
        <p className="cards__description">{props.description}</p>
        <h3 className="cards__price">{props.price}</h3>
        <button className="cards_btn">Add to Card</button>
      </div>
    </div>
  );
}

export { Homes };
