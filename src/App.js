import './App.css';
import React, { useEffect, useState } from "react";
import Restaurants from "./components/Restaurants";
import RestaurantRequests from './components/RestaurantRequests';

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9292/restaurants`)
      .then(res => res.json())
      .then(setRestaurants);
  }, []);

  useEffect(() => {
    fetch(`http://localhost:9292/restaurant-requests`)
      .then(res => res.json())
      .then(setRequests);
  }, []);

  const onDeleteRequest = (deleteId) => {
      setRequests((requests) => requests.filter(request => request.id !== deleteId))
      fetch(`http://localhost:9292/restaurant-requests/${deleteId}`, {
        method: "DELETE"
    })
  }

  const onUpdateRequests = () => {
    fetch(`http://localhost:9292/restaurant-requests`)
      .then(res => res.json())
      .then(setRequests);
  }

  return (
    <div className="App">
      <header>
        <h1>Feedplan Restaurants</h1>
      </header>

        <div id="content-container">
              <RestaurantRequests 
                      requests={requests}
                      deleteRequest={onDeleteRequest}
                      updateRequests={onUpdateRequests}
                      />

              <Restaurants 
                restaurants={restaurants}
                />
        </div>
    </div>
  );
}

export default App;
