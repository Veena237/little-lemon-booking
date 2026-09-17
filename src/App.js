import "./App.css";
import { useReducer } from "react";
import BookingForm from "./components/BookingForm";
import Header from "./components/Header";
import { fetchAPI } from "./api";

const initializeTimes = () => {
  return fetchAPI(new Date());
};

function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      return fetchAPI(action.date);
    default:
      return state;
  }
}

function App() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  return (
    <div className="app">

      {/* Header */}
      <Header />

      {/* Hero Section */}
<section id="home" className="hero">
  <div className="hero-content">
    <h1>Little Lemon</h1>
    <h2>Chicago</h2>

    <p>
      Enjoy delicious Mediterranean food in a warm and welcoming
      atmosphere.
    </p>

    <a href="#reservation">
      <button type="button">Reserve a Table</button>
    </a>
  </div>

  <div className="hero-image">
    <img
      src="/images/restaurant.jpg"
      alt="Delicious Mediterranean food at Little Lemon"
    />
  </div>
</section>

      {/* Specials Section */}
      <section id="specials" className="specials">
        <h2>Our Specials</h2>

        <div className="specials-container">

          <article>
            <h3>Greek Salad</h3>
            <p>
              Fresh tomatoes, cucumber, olives and feta cheese
              served with our special dressing.
            </p>
            <strong>$12.99</strong>
          </article>

          <article>
            <h3>Bruchetta</h3>
            <p>
              Crispy bread topped with fresh tomatoes, basil
              and delicious Mediterranean herbs.
            </p>
            <strong>$8.99</strong>
          </article>

          <article>
            <h3>Lemon Dessert</h3>
            <p>
              A delicious homemade lemon dessert with a
              refreshing and sweet Mediterranean flavor.
            </p>
            <strong>$6.99</strong>
          </article>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Little Lemon</h2>

        <p>
          Little Lemon is a family-owned Mediterranean restaurant
          located in Chicago. We serve fresh, flavorful dishes
          prepared with quality ingredients. Our goal is to provide
          our guests with delicious food and a friendly dining
          experience.
        </p>
      </section>

      {/* Reservation Section */}
      <section id="reservation" className="reservation">
        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
        />
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Little Lemon Restaurant</p>
      </footer>

    </div>
  );
}

export default App;