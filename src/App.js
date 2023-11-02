import "./App.scss";
import React, { StrictMode } from "react";

import { Route, Routes, Link } from "react-router-dom";
import { AboutM } from "./aboutM";
import { Homes } from "./Homes";
import { BookingForm } from "./bookingForm";
function App() {
  return (
    <Routes>
      <Route path="/about" element={<AboutM />} />
      <Route path="/" element={<Homes />} />
      <Route path="/booking" element={<BookingForm />} />
    </Routes>
  );
}
export default App;
