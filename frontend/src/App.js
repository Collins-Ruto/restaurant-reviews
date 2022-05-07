import React from 'react'
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import AddReview from "./components/AddReview";
import Restaurant from "./components/Restaurants";
import RestaurantsList from "./components/RestaurantsList";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";

require("react-dom");
window.React2 = require("react");
console.log(window.React1 === window.React2);

function App() {
  const [user, setUser] = React.useState(null);

  async function login(user = null) {
    setUser(user);
  }
  async function logout() {
    setUser(null);
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a href="/restaurants" className="navbar-header">
          Restaurant Reviews
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/restaurants" className="nav-link">
              Restaurants
            </Link>
          </li>
          <li className="nav-item">
            {user ? (
              //  eslint-disable-next-line jsx-a11y/anchor-is-valid
              <a
                onClick={logout}
                className="nav-link"
                style={{ cursor: "pointer" }}
              >
                logout {user.name}
              </a>
            ) : (
              <Link onClick={"/login"} to="/login" className="nav-link">
                Login
              </Link>
            )}
          </li>
        </div>
      </nav>
      <div className="container mt-3">
        <Routes>
          <Route exact path={"/"} element={<RestaurantsList />} />
          <Route
            path="/restaurants/:id/review"
            element={<AddReview user={user} />}
          />
          <Route path="/restaurants/:id" element={<Restaurant user={user} />} />
          <Route path="/login" element={<Login login={login} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;