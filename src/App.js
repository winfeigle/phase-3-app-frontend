import './App.css';
import React, { useEffect, useState } from "react";
import Restaurants from "./components/Restaurants";

function App() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9292/restaurants`)
      .then(res => res.json())
      .then(setRestaurants);
  }, []);

  return (
    <div className="App">
      <header>
      <h1>Feedplan Restaurants</h1>
      </header>
      <Restaurants 
        restaurants={restaurants}
        />
    </div>
  );
}

export default App;
