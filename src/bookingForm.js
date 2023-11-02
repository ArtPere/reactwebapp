import "./App.scss";
import { useState } from "react";
import { useSubmit } from "react-router-dom";
import Header from "./header";
import { Form } from "react-router-dom";

const BookingForm = () => {
  return (
    <>
      <Header />

      <BookingJ />
    </>
  );
};

export { BookingForm };

function BookingJ() {
  const [guests, setGuests] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [occasion, setOccasion] = useState("");
  const [avltime, setAlvtime] = useState([
    { id: 0, value: "17:00" },
    { id: 1, value: "18:00" },
    { id: 2, value: "19:00" },
    { id: 3, value: "20:00" },
    { id: 4, value: "21:00" },
    { id: 5, value: "22:00" },
    { id: 6, value: "23:00" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    clearForm();
    console.log({ time });
  };
  const clearForm = () => {
    setName("");
    setDate("");
    setTime("");
    setGuests("");
    setOccasion("");
  };
  const validForm = () => {
    return (
      name && guests && occasion && date && time && occasion !== "occation"
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="Bform">
        <fieldset>
          <div className="Field">
            <label>
              Name{" "}
              <input
                type="text"
                placeholder="Name"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div className="Field">
            <label>
              Choose date
              <input
                type="date"
                id="Date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </label>
          </div>
          <div className="Field">
            <label>
              Choose time
              <select
                id="time "
                name="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              >
                {avltime.map((artist) => (
                  <option key={artist.id}>{artist.value}</option>
                ))}
              </select>
            </label>
          </div>
          <div className="Field">
            <label>
              Number of guests
              <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              />
            </label>
          </div>
          <div className="Field">
            <label>
              Occasion
              <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
              >
                <option value="occation">Occasion</option>
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
            </label>
          </div>
          <div className="Field">
            <input
              type="submit"
              value="Make Your reservation"
              disabled={!validForm()}
            />
          </div>{" "}
        </fieldset>
      </form>
    </div>
  );
}
