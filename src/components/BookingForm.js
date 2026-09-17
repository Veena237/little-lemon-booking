import { useState } from "react";
import { submitAPI } from "../api";

function BookingForm({availableTimes, dispatch}) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState("Birthday");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = {
    date,
    time,
    guests,
    occasion,
    name,
    email,
    phone,
  };

  const success = submitAPI(formData);

  if (success) {
    setSubmitted(true);
  }
}
if (submitted) {
  return (
    <section className="booking-confirmation">
      <h2>Booking Confirmed! 🎉</h2>
      <p>Thank you, {name}!</p>
      <p>Your table has been reserved successfully.</p>

      <div className="reservation-details">
        <p><strong>Date:</strong> {date}</p>
        <p><strong>Time:</strong> {time}</p>
        <p><strong>Guests:</strong> {guests}</p>
        <p><strong>Occasion:</strong> {occasion}</p>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
      </div>
    </section>
  );
 }
  return (
    <section className="booking-section">
      <h2>Reserve a Table</h2>

      <form onSubmit={handleSubmit} className="booking-form">
        <label htmlFor="res-date">Choose date</label>
        <input
            type="date"
            id="res-date"
            value={date}
            required
            onChange={(e) => {
            setDate(e.target.value);
            dispatch({ type: "UPDATE_TIMES", date: e.target.value });
        }}
        />

        <label htmlFor="res-time">Choose time</label>
        <select
         id="res-time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
        >
            <option value="">select a time</option>
        {availableTimes.map((slot) => (
        <option key={slot} value={slot}>
        {slot}
        </option>
        ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          id="guests"
          type="number"
          min="1"
          max="10"
          value={guests}
          onChange={(event) => setGuests(Number(event.target.value))}
          required
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(event) => setOccasion(event.target.value)}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Engagement">Engagement</option>
          <option value="Other">Other</option>
        </select>

        <label htmlFor="name">Full name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <label htmlFor="email">Email address</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <label htmlFor="phone">Phone number</label>
        <input
          id="phone"
          type="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          pattern="[0-9+\-\s()]{7,15}"
          title="Please enter a valid phone number"
          required
        />

        <button type="submit">Reserve Table</button>
      </form>
    </section>
  );
}

export default BookingForm;