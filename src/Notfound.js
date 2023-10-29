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

const Notfound = () => {
  return (
    <>
      <Header />
      <About />
    </>
  );
};

export { Notfound };
